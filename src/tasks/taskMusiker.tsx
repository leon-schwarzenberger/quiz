import type { Coord, Task } from "./tasks";
import { Box, Typography } from "@mui/material";

const location:Coord = {
    lat: 53.578596,
    long: 10.023075,
}

const radius = 15

function TaskScreen() {

    return (
        <Box display="flex" flexDirection="column" margin="20px" borderRadius="10px" bgcolor="white" gap="10px" flex={1}>
            <Box display="flex" flexDirection="column" flex={1} borderRadius="10px 10px 0 0" overflow="hidden" maxHeight="85%">
                <img src="img_musiker.png"  />
            </Box>
            <Typography variant="subtitle1">
                Finde den Ort, an dem sich zwei Musiker an des einen Parks treffen.
            </Typography>
            <Typography variant="body2">
            </Typography>
        </Box>
    )
}


export const taskMusiker: Task = {
    screen: <TaskScreen />,
    location: location,
    radius: radius,
}
