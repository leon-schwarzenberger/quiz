import type { Coord, Task } from "./tasks";
import { Box, Typography } from "@mui/material";

const location:Coord = {
    lat: 53.567906,
    long: 10.015685,
}

const radius = 10

function TaskScreen() {

    return (
        <Box display="flex" flexDirection="column" margin="20px" borderRadius="10px" bgcolor="white" gap="10px" flex={1}>
            <Box display="flex" flexDirection="column" flex={1} borderRadius="10px 10px 0 0" overflow="hidden" maxHeight="85%">
                <img src="img_alster.png"  />
            </Box>
            <Typography>
                Finde dieses Gebäude und stelle dich davor.
            </Typography>
        </Box>
    )
}


export const taskAlster: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
