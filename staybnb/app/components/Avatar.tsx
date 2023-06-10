"use client";
import React from "react";
import Image from "next/image";
type Props = {
  src?: string | null | undefined;
};

function Avatar({ src }: Props) {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
    />
  );
}

export default Avatar;
