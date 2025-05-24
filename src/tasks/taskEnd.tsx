import type { Coord, Task } from "./tasks";
import { Box, Typography } from "@mui/material";

const location:Coord = {
    lat: 53.568793,
    long: 10.022916,
}

const radius = 10

function TaskScreen() {

    return (
         <Box display="flex" flexDirection="column" margin="20px" borderRadius="10px" bgcolor="white" gap="10px" flex={1}>
            <Box display="flex" flexDirection="column" flex={1} borderRadius="10px 10px 0 0" overflow="hidden" maxHeight="85%">
                <img src="kaffeundkuchen.jpg"  />
            </Box>
            <Typography variant="subtitle1">
                Kehre zum Ursprung zurück.
            </Typography>
            <Typography variant="body2">
            </Typography>
        </Box>
    )
}


export const taskEnd: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
