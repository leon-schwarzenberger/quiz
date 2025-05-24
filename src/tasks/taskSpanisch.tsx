import type { Coord, Task } from "./tasks";
import { Box, Typography } from "@mui/material";

const location:Coord = {
    lat: 53.565500,
    long: 10.019291,
}

const radius = 15

function TaskScreen() {

    return (
        <Box display="flex" flexDirection="column" margin="20px" borderRadius="10px" bgcolor="white" gap="10px" flex={1}>
            <Box display="flex" flexDirection="column" flex={1} borderRadius="10px 10px 0 0" overflow="hidden" maxHeight="85%">
                <img src="duolingo.png"  />
            </Box>
            <Typography variant="subtitle1">
                Wo könnte "escalera" sein?
            </Typography>
            <Typography variant="body2">
            </Typography>
        </Box>
    )
}


export const taskSpanisch: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
