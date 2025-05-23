import type { Coord, Task } from "./tasks";
import { TaskContainer } from "../components/boxes";

const location:Coord = {
    lat: 53.544655,
    long: 9.934628,

}

const radius = 5

function TaskScreen() {

    return (
        <TaskContainer>
            <p>Task A</p>
        </TaskContainer>
    )
}


export const taskA: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
