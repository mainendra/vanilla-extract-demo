import { createTheme } from "@vanilla-extract/css";
import { vars } from "./themeContract.css";

export const blueTheme = createTheme(vars, {
  color: {
    brand: 'blue',
    buttonHover: 'green',
  },
  font: {
    body: 'arial',
    color: 'yellow',
  },
  padding: {
    small: '5px',
    medium: '10px',
    large: '20px',
  },
  buttonRadius: '20px'
});
