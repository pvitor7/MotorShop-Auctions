import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@material-ui/core";
import { Button } from "@mui/material";
import { ButtonProps } from "../../interface/propsComponents";


const ButtonUI = ({
  text,
  name,
  color,
  variant,
  size,
  type,
  setBoolean,
}: ButtonProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4529E6",
        contrastText: "#fff",
      },
      secondary: {
        main: "#000000",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        size={size}
        onClick={(e) => {
          e.preventDefault();
          setBoolean();
        }}
        type={type}
        name={name}
        color={color}
        variant={variant}
      >
        {" "}
        {text}{" "}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonUI;
