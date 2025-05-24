import { CrossWord } from "../components/CrossWord";
import type { Coord, Task } from "./tasks";
import { Box } from "@mui/material";

const location:Coord = {
    lat: 53.578031,
    long: 10.015764,
}

const radius = 15

function TaskScreen() {

    return (
        <Box display="flex" flexDirection="column" margin="20px" borderRadius="10px" gap="10px" flex={1}>
            <CrossWord />
        </Box>
    )
}


export const taskTRUCYS: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
