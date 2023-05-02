import { createContext } from "react"

export const THEME = {
    light:{
        backgroundColor: "#ffffff",
        color: "#000000",
        foreground: "#000000",
        border: "2px solid #000000",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 1)"
    },
    dark:{
        backgroundColor: "#000000",
        color: "#ffffff",
        foreground: "rgb(10, 10, 10)",
        border: "2px solid #ffffff",
        boxShadow: "0 2px 4px rgba(255, 255, 255, 1)"
    }
}
    

export const ThemeContext = createContext(THEME.light)