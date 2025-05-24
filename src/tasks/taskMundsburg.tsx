import type { Coord, Task } from "./tasks";
import { Box, Typography } from "@mui/material";

const location:Coord = {
    lat: 53.569470,
    long: 10.027241,
}

const radius = 15

function TaskScreen() {

    return (
        <Box display="flex" flexDirection="column" margin="20px" borderRadius="10px" bgcolor="white" gap="10px" flex={1}>
            <Box display="flex" flexDirection="column" flex={1} borderRadius="10px 10px 0 0" overflow="hidden" maxHeight="85%">
                <img src="img_mundsburg.png"  />
            </Box>
            <Typography>
                Stelle dich an rote Kreuz.
            </Typography>
        </Box>
    )
}


export const taskMundsburg: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
