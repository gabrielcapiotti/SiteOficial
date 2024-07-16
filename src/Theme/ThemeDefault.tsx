import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "#462863",
        secondary: "#b27a01",
        tertiary: "#ffffff",
        quaternary: "#363636",
        quinary: "#8B008B",
        senary: "#808000",
        septenary: "#9400D3",
        octonary: "#00008B",
        nonary: "#008000",
    }
};

interface ThemeDefaultProps {
    children: React.ReactNode;
}
function ThemeDefault({ children }: ThemeDefaultProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeDefault;




