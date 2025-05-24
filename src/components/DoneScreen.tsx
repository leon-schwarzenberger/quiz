import { Box, Typography, useTheme } from "@mui/material";
import CelebrationIcon from '@mui/icons-material/Celebration';

export function DoneScreen() {
  const theme = useTheme();
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="300px"
            >
                <CelebrationIcon
                    sx={{ fontSize: 150, color: theme.palette.primary.main }}
                />
            </Box>
            <Typography>Du hast das Quiz erfolgreich beendet! </Typography>
        </>
    )
}