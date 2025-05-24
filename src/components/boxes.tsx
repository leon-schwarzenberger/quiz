import { Box, styled } from "@mui/material";


export const FullBox= styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
})

export const FillBox= styled(Box)({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
})
export const HalfBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: "50%",
    width: "100%",
})