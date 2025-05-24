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
    Coord,         // current
    Coord[],     // trace
    boolean,     // done
    string | null, // locationError
    () => void,   // skip
    () => void,   // prev
    () => void,   // reset
    () => void,    // fake reach
    number,
] {

    const [next, setNext] = useLocalStorage<number>("geo_next", 0)
    const [locationError, setLocationError] = useState<string | null>(null)
    const [currentLocation, setCurrentLocation] = useState<Coord>({lat: 0, long: 0});
    const [trace, setTrace] = useLocalStorage<Coord[]>("geo_trace", [])
    const [done, setDone] = useLocalStorage("geo_done", false)

    const [currentDist, setCurrentDist] = useState(0)


    const handleReached = () => {
        if(next + 1 < tasks.length) {
            setNext(next + 1)
            onNext()
        } else {
            setDone(true)
        }
    }

    const checkCoords = (coord: Coord) => {
        const last = trace.length > 0 ? trace[trace.length - 1] : undefined
        if(!last || getDistance(last.lat, last.long, coord.lat, coord.long) > 10){
            setTrace(trace => [...trace, coord])
        }

        if (next < tasks.length && !done) {
            
            const target = tasks[next].location
            const distance = getDistance(coord.lat, coord.long, target.lat, target.long);
            setCurrentDist(distance)

            if (distance <= tasks[next].radius){
                handleReached()
            }
        } else {
            setDone(true)
        }

    }

async function getAverageLocation(numSamples = 5):Promise<Coord> {
  function getCurrentPosition(): Promise<Coord> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve({
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
          } as Coord);
        },
        (err) => reject(err),
        { enableHighAccuracy: true }
      );
    });
  }

  const samples: Coord[] = [];
  for (let i = 0; i < numSamples; i++) {
    try {
      const location = await getCurrentPosition();
      samples.push(location);
      await new Promise((r) => setTimeout(r, 100)); // wait 0.1 sec between samples
    } catch (error) {
      console.error("Error getting location:", error);
    }
  }

  if (samples.length === 0) {
    throw new Error("No valid GPS samples collected.");
  }

  const sum = samples.reduce(
    (acc, loc) => {
      acc.lat += loc.lat;
      acc.lon += loc.long;
      return acc;
    },
    { lat: 0, lon: 0 }
  );

  return {
    lat: sum.lat / samples.length,
    long: sum.lon / samples.length,
  };
}


    const runCheck = async () => {
        console.log("check")
        setLocationError(null)
        
        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by this browser.')
            return
        }

        const current = await getAverageLocation(5);

        setCurrentLocation(current)
        checkCoords(current)
        
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
                    }, 5000); // every 10 seconds
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
    }, [active, next])


    return [next, currentLocation, trace, done, locationError, skip, prev, reset, fakeReached, currentDist]
}