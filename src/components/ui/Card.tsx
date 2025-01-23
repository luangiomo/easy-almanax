import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  isNoPadding?: boolean;
};

function Card({ children, isNoPadding }: CardProps) {
  return (
    <div
      className={`w-full rounded-2xl bg-[#262626] border border-[#303030] overflow-hidden ${
        isNoPadding ? "p-0" : "p-4"
      }`}
    >
      {children}
    </div>
  );
}

export default Card;
