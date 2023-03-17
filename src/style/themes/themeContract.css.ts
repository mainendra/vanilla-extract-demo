import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    brand: null,
    buttonHover: null,
  },
  font: {
    body: null,
    color: null
  },
  padding : {
    small: null,
    medium: null,
    large: null,
  },
  buttonRadius: null,
});
