import { CrossWord } from "../components/CrossWord";
import type { Coord, Task } from "./tasks";
import { Box } from "@mui/material";

const location:Coord = { // TODO
    lat: 53.578596,
    long: 10.023075,
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
