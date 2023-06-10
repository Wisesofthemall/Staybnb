import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  icon: IconType;
  selected?: boolean;
  description: string;
};

function CategoryBox({ label, icon, description, selected }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected ? "border-b-neutral-800" : "border-transparent"
      }`}
    >
      CategoryBox
    </div>
  );
}

export default CategoryBox;
