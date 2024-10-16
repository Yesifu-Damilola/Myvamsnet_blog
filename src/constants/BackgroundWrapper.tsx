import { ReactNode } from "react";

export const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
}) => {
  return (
    <div className="bg-[url('src/assets/termsbg.png')] bg-cover bg-center w-full h-[413px] grid place-content-center">
      {children}
    </div>
  );
};

interface BackgroundWrapperProps {
  children: ReactNode;
}
