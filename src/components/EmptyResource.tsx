import { JSX, ReactNode } from "react";

type EmptyAssetsProps = {
  children: JSX.Element | JSX.Element[] | ReactNode;
};

export const EmptyResource = ({ children }: EmptyAssetsProps) => {
  return (
    <div className="border-2 border-dashed border-gray-500 rounded-lg w-full min-h-96 flex flex-col gap-6 items-center justify-center">
      {children}
    </div>
  );
};
