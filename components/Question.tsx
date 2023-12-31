import {
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ChevronDoubleUpIcon,
  ClockIcon,
  MinusIcon,
  PlusIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Question() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex mb-4 pb-4 border-b border-b-base-content/20">
      <div className="flex flex-col w-16 items-center">
        <div className="avatar">
          <div className="w-16 h-16 rounded-xl">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <CheckBadgeIcon className="w-8 h-8 text-green-500 mt-2" />
      </div>
      <div className="ml-4">
        <h3 className="text-2xl font-bold text-white/90">
          <Link href="/questions/asdasd" className="hover:underline">
            How do you finish the boxing event in so few cycles??
          </Link>
        </h3>
        <div className="flex gap-1 mt-1 font-bold items-center">
          <ClockIcon className="w-5 h-5" />
          <span className="text-sm font-normal mr-2">69 hours ago</span>
          <TagIcon className="w-5 h-5 mr-1" />
          <Link href="/tags/asd" className="btn btn-outline btn-xs">
            Huohuo
          </Link>
          <Link href="/tags/asd" className="btn btn-outline btn-xs">
            Huohuo
          </Link>
        </div>
        <div className={`prose mt-2 ${!expanded && "line-clamp-3"}`}>
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
            45 votes
          </Link>
          <Link
            className="flex items-center gap-1 hover:underline"
            href="/link"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5 text-yellow-500" />4
            answers &middot; 16 replies
          </Link>
        </div>
      </div>
    </div>
  );
}
