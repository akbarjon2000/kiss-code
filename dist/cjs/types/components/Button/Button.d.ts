import React from "react";
interface ButtonProps {
    color: string;
    width: number;
    height: number;
    border: number;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
