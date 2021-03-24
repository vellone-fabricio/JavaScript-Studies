import { PropsWithChildren } from "react";

interface ButtonProps {
  color: string;
  handleClick: () => void;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
  const { color, children, handleClick } = props;
  return (
    <span 
      style={{cursor: 'pointer', backgroundColor: color, margin: "20px", padding: "10px" }}
      onClick={handleClick}
    >
      {children}
    </span>
  );
}