"use client";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  description: string;
  icon: IconType;
};

function ListingCategory({ label, description, icon: Icon }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="font-light text-neutral-600">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ListingCategory;
