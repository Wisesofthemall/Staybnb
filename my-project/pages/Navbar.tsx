import React from "react";

type Props = {
  title: string;
  ele1: string;
  ele2: string;
};

export default function Navbar({ title, ele1, ele2 }: Props) {
  return (
    <div className=" flex p-7 pl-9 border-b border-black border-l-0">
      <main className="text-rose-500 text-2xl font-bold float-left ">
        {title}
      </main>
      <div className="float-right ml-auto">
        <a href="/ainxeo" className="">
          {ele1}
        </a>
        <a href="/anylinr" className="ml-6">
          {ele2}
        </a>
      </div>
    </div>
  );
}
