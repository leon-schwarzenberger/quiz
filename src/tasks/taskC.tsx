import type { Coord, Task } from "./tasks";
import { TaskContainer } from "../components/boxes";

const location:Coord = {
    lat: 53.544615,
    long: 9.935073,
}

const radius = 10

function TaskScreen() {

    return (
        <TaskContainer>
            <p>Task C</p>
        </TaskContainer>
    )
}


export const taskC: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
