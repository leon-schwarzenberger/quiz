import type { Coord, Task } from "./tasks";
import { TaskContainer } from "../components/boxes";

const location:Coord = {
    lat: 53.544648,
    long: 9.933782,
}

const radius = 10

function TaskScreen() {

    return (
        <TaskContainer>
            <p>Task B</p>
        </TaskContainer>
    )
}


export const taskB: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
