import Navbar from "@/pages/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-red-700">
      {" "}
      <Navbar title={"airbnb"} ele1={"Airbnb your place"} ele2={"signup"} />
    </div>
  );
}
