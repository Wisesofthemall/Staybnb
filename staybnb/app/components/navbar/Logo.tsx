"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
type Props = {};

function Logo({}: Props) {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push("/")}
        width={150}
        height={20}
        className=" md:block cursor-pointer "
        alt="Logo"
        src="/images/logo.png"
      />
    </div>
  );
}

export default Logo;
