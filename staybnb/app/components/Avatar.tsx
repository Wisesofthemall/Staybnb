"use client";
import React from "react";
import Image from "next/image";
type Props = {};

function Avatar({}: Props) {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      src="/images/placeholder.jpg"
      alt="Avatar"
    />
  );
}

export default Avatar;
