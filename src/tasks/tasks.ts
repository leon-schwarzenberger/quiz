import type { ReactNode } from "react";
import { taskAlster } from "./taskAlster";
import { taskMundsburg } from "./taskMundsburg";
import { taskMusiker } from "./taskMusiker";
import { taskTRUCYS } from "./taskTRUCYS";
import { taskSpanisch } from "./taskSpanisch";
import { taskEnd } from "./taskEnd";

export interface Coord {
    long: number;
    lat: number;
}

export interface Task {
    screen: ReactNode;
    location: Coord;
    radius: number;
}

export const centerCoords: Coord = {
    lat: 53.573400,
    long: 10.018824,
}

export const borderCoords: Coord[] = [
    { // start
        lat: 53.580358,
        long: 10.003041,
    },
    {
        lat: 53.560630,
        long: 10.012067,
    },
    {
        lat: 53.566328,
        long: 10.032009,
    },
    {
        lat: 53.582153,
        long: 10.019580,
    },
    { // end
        lat: 53.580358,
        long: 10.003041,
    },
]

export const questA = [
    taskTRUCYS,
    taskMusiker,
    taskMundsburg,
    taskSpanisch,
    taskAlster,
    taskEnd,
]

export const questB = [
    taskMundsburg,
    taskSpanisch,
    taskAlster,
    taskTRUCYS,
    taskMusiker,
    taskEnd,
]