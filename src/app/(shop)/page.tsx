import Image from "next/image";
import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h2 className={titleFont.className} >Hola con fuente distintas</h2>
    </div>
  );
}
