import { useEffect, useState } from "react";
import type { Coord, Task } from "./tasks/tasks";
import { useLocalStorage } from "./useLocalStorage";

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371e3; // meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c;
}


export function useTracker(tasks: Task[], active: boolean, onNext: () => void): [
    number,      // next
    Coord[],     // trace
    boolean,     // done
    string | null, // locationError
    () => void,   // skip
    () => void,   // prev
    () => void,   // reset
    () => void,    // fake reach
] {

    const [next, setNext] = useLocalStorage<number>("geo_next", 0)
    const [locationError, setLocationError] = useState<string | null>(null)
    const [trace, setTrace] = useLocalStorage<Coord[]>("geo_trace", [])
    const [done, setDone] = useLocalStorage("geo_done", false)


    const handleReached = () => {
        if(next + 1 < tasks.length) {
            setNext((prev) => prev+1)
            onNext()
        } else {
            setDone(true)
        }
    }

    const checkCoords = (lat: number, long: number) => {
        const coord: Coord = {
            long,
            lat,
        }
        setTrace((current) => current.concat([coord]))

        if (next < tasks.length) {
            
            const target = tasks[next].location
            const distance = getDistance(lat, long, target.lat, target.long);

            if (distance <= tasks[next].radius){
                handleReached()
            }
        } else {
            setDone(true)
        }

    }


    const runCheck = () => {
        console.log("check")
        setLocationError(null)
        
        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by this browser.')
            return
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                checkCoords(position.coords.latitude, position.coords.longitude)
            },
            (error) => {
                let errorMessage = 'An error occurred while retrieving location.'
                switch (error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = 'Location access denied by user.'
                    break
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Location information is unavailable.'
                    break
                case error.TIMEOUT:
                    errorMessage = 'Location request timed out.'
                    break
                }
                setLocationError(errorMessage)
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        )
    }

    const skip = () => {
        setNext((prev) => Math.min(prev + 1, tasks.length - 1))
    }

    const prev = () => {
        setNext((prev) => Math.max(prev - 1, 0))
        setDone(false)
    }

    const reset = () => {
        setNext(0)
        setTrace([])
        setDone(false)
    }

    const fakeReached = () => {
        handleReached()
    }

    useEffect(() => {
        let interval:number | undefined = undefined;

        const activate = () => {
            interval = setInterval(() => {
                        runCheck() 
                    }, 10000); // every 10 seconds
        }

        const deactivate = () => {
            if (interval != undefined) {
                clearInterval(interval)
            }
        }


        if (active) {
            activate()
        } else {
            deactivate()
        }
        return deactivate;
    }, [active])


    return [next, trace, done, locationError, skip, prev, reset, fakeReached]
}