import {
  ArrowTrendingUpIcon,
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ChevronDoubleUpIcon,
  ClockIcon,
  CubeTransparentIcon,
  MinusIcon,
  PlusIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import placeholder from "@/public/placeholder-sq.webp";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Question() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex mb-6 pb-6 border-b border-b-base-content/20">
      <div className="flex flex-col w-20 items-center">
        <div className="avatar drop-shadow-xl">
          <div className="w-20 h-20 mask mask-hexagon">
            <Image src={placeholder} alt="cats" />
          </div>
        </div>
        <div className="tooltip tooltip-right" data-tip="Question answered!">
          <CheckBadgeIcon className="w-10 h-10 text-green-500 mt-2" />
        </div>
        <div
          className="tooltip tooltip-right"
          data-tip="Bonus reputation available"
        >
          <CubeTransparentIcon className="w-10 h-10 text-blue-500 mt-2" />
        </div>
      </div>
      <div className="ml-4">
        <div className="flex gap-1 mb-1">
          <Link
            href="/tags/asd"
            className="btn btn-xs uppercase border-none bg-info/20 text-white/80 font-black hover:bg-info/40"
          >
            Topic
          </Link>
          <Link
            href="/tags/asd"
            className="btn btn-xs uppercase border-none bg-info/20 text-white/80 font-black hover:bg-info/40"
          >
            Topic
          </Link>
        </div>
        <h3 className="text-2xl font-bold text-white/90">
          <Link href="/questions/asdasd" className="hover:underline">
            How do you finish the boxing event in so few cycles??
          </Link>
        </h3>
        <div className="flex gap-1 mt-1 font-bold items-center text-white/40">
          <UserIcon className="w-5 h-5" />
          <Link
            href="/users/asdas"
            className="text-sm font-bold mr-2 text-amber-500 hover:text-white/90"
          >
            quills <span className="font-normal text-white/40">(2002)</span>
          </Link>
          <ClockIcon className="w-5 h-5" />
          <span className="text-sm font-normal mr-2">69 hours ago</span>
        </div>
        <div
          className={`prose mt-3 ${
            !expanded && "line-clamp-3"
          } text-base-content`}
        >
          <p className="">
            Imagine you're in a tall building with a cat. The cat can survive a
            fall out of a low story window, but will die if thrown from a high
            floor. How can you figure out the longest drop that the cat can
            survive, using the least number of attempts?
          </p>
          <p>
            Obviously, if you only have one cat, then you can only search
            linearly. First throw the cat from the first floor. If it survives,
            throw it from the second. Eventually, after being thrown from floor
            f, the cat will die. You then know that floor f-1 was the maximal
            safe floor.
          </p>
          <div className="flex gap-2 mb-2">
            <Link href="/asdasd" className="btn btn-info btn-sm gap-1">
              <CheckBadgeIcon className=" w-4 h-4" />
              Answer Question
            </Link>
            <button className="btn btn-outline btn-info btn-sm">🐈 32</button>
          </div>
        </div>
        <p>
          <button
            className="btn btn-ghost btn-xs gap-1"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <MinusIcon className="w-4 h-4" />
                Collapse
              </>
            ) : (
              <>
                <PlusIcon className="w-4 h-4" />
                Expand
              </>
            )}
          </button>
        </p>
        <div className="flex gap-4 text-sm mt-3">
          <Link
            className="flex items-center gap-1 hover:underline"
            href="/link"
          >
            <ChevronDoubleUpIcon className="w-5 h-5 text-blue-500" />
            45 points
          </Link>
          <Link
            className="flex items-center gap-1 hover:underline"
            href="/link"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5 text-yellow-500" />4
            answers • 16 replies
          </Link>
          <Link
            className="flex items-center gap-1 hover:underline"
            href="/link"
          >
            <BellAlertIcon className="w-5 h-5 text-red-500" />
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}
