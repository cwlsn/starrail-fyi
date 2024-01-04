import placeholder from "@/public/placeholder-sq.webp";
import destruction from "@/public/destruction.webp";
import ice from "@/public/ice.webp";

import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

type Props = {
  rarity: 4 | 5;
};

export function CharacterSelect({ rarity }: Props) {
  return (
    <Link
      href="/asdsad"
      className="border border-white/10 hover:border-blue-700 rounded-md px-3 py-2 flex flex-col items-center"
    >
      <div className="flex gap-0 items-center">
        <div className="w-10 h-10 mask mask-hexagon mb-2">
          <Image src={placeholder} alt="cats" />
        </div>
        <div
          className="w-8 h-8 ml-1 bg-base-200 rounded-full
      border-[3px] border-base-100 p-1"
        >
          <Image src={destruction} alt="ice" />
        </div>
        <div
          className="w-8 h-8 ml-[-12px] bg-base-200 rounded-full
      border-[3px] border-base-100 p-1"
        >
          <Image src={ice} alt="ice" />
        </div>
      </div>
      <span
        className={`flex items-center font-bold text-sm ${
          rarity === 4 ? "text-violet-500" : "text-amber-500"
        }`}
      >
        <StarIcon className="w-4 h-4" />
        <span>{rarity}</span>
        <span className="font-bold text-white/90 ml-2">Jingliu</span>
      </span>
    </Link>
  );
}
