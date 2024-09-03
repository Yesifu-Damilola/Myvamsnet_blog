import { FC, ReactNode } from "react";

export const CustomButton: FC<ButtonProps> = ({
  className = "text-black py-2 px-0 text-base font-normal",
  icon,
  text,
}) => {
  return (
    <button className={`${className}`}>
      {text}
      <span>{icon}</span>
    </button>
  );
};
interface ButtonProps {
  className: string;
  icon?: ReactNode;
  text: string;
}
