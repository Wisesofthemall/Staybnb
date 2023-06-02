import Image from "next/image";

export default function Home() {
  type Alert = {
    title: string;
    code: number;
    message: string;
  };

  const myAlerts: Alert = {
    title: "",
    code: 0,
    message: "",
  };
  const arr = ["a", "b", "c", "d", "e", "f"];
  const last = arr.at(-1);

  type Tuple = number[];
  let tuple1: Tuple = [0, 0, 7];

  return <div className="text-rose-400-700"></div>;
}
