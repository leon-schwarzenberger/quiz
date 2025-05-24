import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface NumberBoxProps {
    number: string;
}
function NumberBox(props: NumberBoxProps) {
    return (
        <Box display="flex" width="40px" height="40px" justifyContent="center" alignItems="center">
            <Typography>{props.number}</Typography>
        </Box>
    )
}

interface LetterBoxProps {
    bold?: boolean;
}
function LetterBox(props: LetterBoxProps) {

    const [v, setV] = useState("")

    return(
        <Box display="flex" width="40px" height="40px" justifyContent="center" alignItems="center">
            <TextField
                variant="outlined"
                value={v}
                onChange={(e) => setV(e.target.value)}
                inputProps={{
                    style: {
                        padding: 0,
                        textAlign: 'center',
                        height: '40px',
                        backgroundColor: props.bold? "rgb(220, 220, 249)" : "white",
                    },
                    }}
                    sx={{
                    '& .MuiOutlinedInput-root': {
                        padding: 0,
                        height: '40px',
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
        <Box display="flex" width="40px" height="40px" />
    )
}


export function CrossWord() {

    return (
        <Box display="flex" flexDirection="column" gap="5px">
            <Box display="flex" flexDirection="row" gap="5px">
                <Box display="flex" flexDirection="column" gap="5px">
                    <NumberBox number="1."/>
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox bold={true}/>
                    <LetterBox />
                    <LetterBox />
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <EmptyBox />
                    <EmptyBox />
                    <EmptyBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <EmptyBox />
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <EmptyBox />
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <EmptyBox />
                </Box>
                <Box display="flex" flexDirection="column" gap="5px">
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <LetterBox />
                    <EmptyBox />
                </Box>
            </Box>
            <Typography display="flex">1. Gewässer in Hamburg</Typography>

        </Box>
    )
}