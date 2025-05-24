import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)({
    "borderRadius": "99px",
});

// Example buttons to showcase the theme colors
export const PrimaryButton = styled(Button)(({ theme }) => ({
    borderRadius: "99px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
    borderRadius: "99px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
}));
