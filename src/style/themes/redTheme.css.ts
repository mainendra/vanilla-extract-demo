import { createTheme } from "@vanilla-extract/css";
import { vars } from "./themeContract.css";

export const redTheme = createTheme(vars, {
  color: {
    brand: 'red',
    buttonHover: 'green',
  },
  font: {
    body: 'helvetica',
    color: 'white',
  },
  padding: {
    small: '5px',
    medium: '10px',
    large: '20px',
  },
  buttonRadius: '10px',
});


