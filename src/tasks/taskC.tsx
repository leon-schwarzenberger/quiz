import type { Coord, Task } from "./tasks";
import { TaskContainer } from "../components/boxes";

const location:Coord = {
    lat: 53.544681,
    long: 9.936963,
}

const radius = 5

function TaskScreen() {

    return (
        <TaskContainer>
            <p>Task B</p>
        </TaskContainer>
    )
}


export const taskC: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
