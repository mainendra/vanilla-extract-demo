import { ReactNode } from "react";
import { themes } from "../style/themes/index.css";
import { ButtonProps, buttonStyle } from "./Button.css";

type themeType = keyof typeof themes;

export function Button({ theme, children, ...btnProps } : { theme?: themeType, children?: ReactNode } & ButtonProps) {
  return <div className={theme && themes[theme]} style={{'display': 'flex'}}>
    <button className={buttonStyle({ ...btnProps })}>{children}</button>
  </div>
}

export function Icon({ name  } : { name: string }) {
  return <span className="material-symbols-outlined">
    {name}
  </span>;
}
