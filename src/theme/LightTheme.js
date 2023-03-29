import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#006d77'
        },
        secondary: {
            main: '#f1faee'
        },
        error: {
            main: red.A400
        }
    }
})