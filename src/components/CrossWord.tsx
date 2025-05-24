import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface LetterBoxProps {
    bold?: boolean;
}
function LetterBox(props: LetterBoxProps) {

    const [v, setV] = useState("")

    return(
        <Box display="flex" width="30px" height="30px" justifyContent="center" alignItems="center">
            <TextField
                variant="outlined"
                value={v}
                onChange={(e) => setV(e.target.value)}
                inputProps={{
                    style: {
                        padding: 0,
                        textAlign: 'center',
                        height: '30px',
                        backgroundColor: props.bold? "rgb(220, 220, 249)" : "white",
                    },
                    }}
                    sx={{
                    '& .MuiOutlinedInput-root': {
                        padding: 0,
                        height: '30px',
                    },
                    '& .MuiInputBase-input': {
                        padding: 0,
                        textAlign: 'center',
                    },
                }}
            />
        </Box>
    )
}

function EmptyBox() {
    return(
        <Box display="flex" width="40px" height="35px" />
    )
}

// 1. Alster
// 2. Udo Lindenberg
// 3.


export function CrossWord() {

    return (
        <Box display="flex" flexDirection="column" gap="5px">
            <Box display="flex" flexDirection="row" gap="5px">
                <Box display="flex" flexDirection="column" gap="5px"> 
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox bold={true}/>
                    <LetterBox />
                    <LetterBox />
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <EmptyBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox bold={true}/>
                    <LetterBox />
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <LetterBox bold={true}/>
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox bold={true}/>
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <LetterBox bold={true}/>
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox bold={true}/>
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                </Box>
            </Box>
            <Typography display="flex">1. Gewässer in Hamburg</Typography> {/* alsTer */}
            <Typography display="flex">2. Künstler in Hamburg (Vor + Nachname)</Typography> {/* udo lindenbeRg */}
            <Typography display="flex" textAlign="start" whiteSpace="break-spaces">{"3. Wie viele Bezirke hat Hamburg?\nU: 7, V: 9, W: 11"}</Typography> {/* A */}
            <Typography display="flex" textAlign="start">4. Wofür muss man sehr für am Sonntag aufstehen?</Typography> {/* fisChmarkt */}
            <Typography display="flex" textAlign="start" whiteSpace="break-spaces">{"5. Wie hoch ist der Michel?\nX: 122, Y: 132, Z: 142"}</Typography> {/* Y */}
            <Typography display="flex" textAlign="start">6. Stadtteil mit vielen Brücken und Kanälen</Typography> {/* speicherStadt */}

        </Box>
    )
}