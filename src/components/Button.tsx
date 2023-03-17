import { ReactNode } from "react";
import { themes } from "../style/themes/index.css";
import { ButtonProps, buttonStyle } from "./Button.css";

type themeType = keyof typeof themes;

export function Button({ theme, children, ...btnProps } : { theme?: themeType, children?: ReactNode } & ButtonProps) {
  return <button className={`${theme && themes[theme]} ${buttonStyle({ ...btnProps })}`}>
    {children}
  </button>;
}

export function Icon({ name  } : { name: string }) {
  return <span className="material-symbols-outlined">
    {name}
  </span>;
}
