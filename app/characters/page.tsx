import abundance from "@/public/abundance.webp";
import destruction from "@/public/destruction.webp";
import erudition from "@/public/erudition.webp";
import fire from "@/public/fire.webp";
import harmony from "@/public/harmony.webp";
import hunt from "@/public/hunt.webp";
import ice from "@/public/ice.webp";
import imaginary from "@/public/imaginary.webp";
import lightning from "@/public/lightning.webp";
import nihility from "@/public/nihility.webp";
import physical from "@/public/physical.webp";
import preservation from "@/public/preservation.webp";
import quantum from "@/public/quantum.webp";
import wind from "@/public/wind.webp";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

type Element =
  | "fire"
  | "ice"
  | "imaginary"
  | "lightning"
  | "physical"
  | "quantum"
  | "wind";

type Path =
  | "abundance"
  | "destruction"
  | "erudition"
  | "harmony"
  | "hunt"
  | "nihility"
  | "preservation";

const elementImgClass = "mr-2";

const getElementImage = (element?: Element) => {
  switch (element?.toLowerCase()) {
    case "fire":
      return (
        <Image
          src={fire}
          width={24}
          height={24}
          alt="fire"
          className={elementImgClass}
        />
      );
    case "ice":
      return <Image src={ice} alt="ice" className={elementImgClass} />;
    case "imaginary":
      return (
        <Image src={imaginary} alt="imaginary" className={elementImgClass} />
      );
    case "lightning":
      return (
        <Image src={lightning} alt="lightning" className={elementImgClass} />
      );
    case "physical":
      return (
        <Image src={physical} alt="physical" className={elementImgClass} />
      );
    case "quantum":
      return <Image src={quantum} alt="quantum" className={elementImgClass} />;
    case "wind":
      return <Image src={wind} alt="wind" className={elementImgClass} />;
    default:
      return <Image src={wind} alt="wind" className={elementImgClass} />;
  }
};

const pathImgClass = "w-[20px] h-[20px]";

const getPathImage = (path: Path) => {
  switch (path?.toLowerCase()) {
    case "abundance":
      return <Image src={abundance} alt="abundance" className={pathImgClass} />;
    case "destruction":
      return (
        <Image src={destruction} alt="destruction" className={pathImgClass} />
      );
    case "erudition":
      return <Image src={erudition} alt="erudition" className={pathImgClass} />;
    case "harmony":
      return <Image src={harmony} alt="harmony" className={pathImgClass} />;
    case "hunt":
      return <Image src={hunt} alt="hunt" className={pathImgClass} />;
    case "nihility":
      return <Image src={nihility} alt="nihility" className={pathImgClass} />;
    case "preservation":
      return (
        <Image src={preservation} alt="preservation" className={pathImgClass} />
      );
  }
};

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: characters } = await supabase.from("characters").select();

  const imgRatio = 512 / 250;

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">sidebar</div>
      <div className="col-span-3">
        <h1 className="text-xl font-black">Honkai: Starrail Characters</h1>
        <div className="grid grid-cols-4 gap-4">
          {characters
            ?.sort((a, b) => {
              const textA = a.name.toUpperCase();
              const textB = b.name.toUpperCase();
              return textA < textB ? -1 : textA > textB ? 1 : 0;
            })
            .map((char) => {
              const { data } = supabase.storage
                .from("images")
                .getPublicUrl(`${char.slug}.webp`);

              const bgColor =
                char.rarity === 5
                  ? "bg-gradient-to-b from-orange-900 to-amber-500 border-4 border-amber-500"
                  : "bg-gradient-to-b from-indigo-800 to-violet-500 border-4 border-violet-500";

              return (
                <Link href={`/characters/${char.slug}`} key={char.slug}>
                  <div
                    className={`relative rounded-tr-[24px] overflow-hidden ${bgColor}`}
                  >
                    <Image
                      src={data.publicUrl}
                      alt={char.name || "Honkai Starrail Character"}
                      width={200}
                      height={200 * imgRatio}
                      className=""
                    />
                    <div className="absolute flex items-center top-1 left-1 p-1 pr-2 rounded-tr-lg rounded-bl-lg bg-gray-900/80">
                      {getElementImage(char.element as Element)}
                      {getPathImage(char.path as Path)}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <h2 className="font-bold text-lg text-center text-white drop-shadow-flat">
                        {char.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
