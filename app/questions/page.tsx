"use client";

import Question from "@/components/Question";
import { rsoFont } from "@/utils/fonts";

import {
  AdjustmentsHorizontalIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CharacterSelect } from "@/components/CharacterSelect";

export default function QuestionsHomePage() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");

  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="col-span-3">
        <div className="font-bold breadcrumbs mb-4">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Questions</li>
          </ul>
        </div>
        <div className="flex-col items-start rounded border border-base-300 bg-textured">
          <div className="flex px-4 py-6">
            <QuestionMarkCircleIcon className="h-12 w-12 text-amber-500 mr-2" />
            <div className="mr-auto">
              <h1
                className={`text-5xl font-black text-white/90 ${rsoFont.className}`}
              >
                Honkai: Starrail Questions
              </h1>
              <p className="">
                Community questions and answers, from builds and team comps to
                quests and events
              </p>
            </div>
            <div className="flex items-center">
              <Link href="/questions/ask" className="btn btn-primary">
                Ask Question
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex gap-2">
            <div className="join">
              <Link
                className={`btn join-item ${
                  activeTab === "trending" && "btn-primary"
                }`}
                href="/questions?tab=trending"
              >
                Trending
              </Link>
              <Link
                className={`btn join-item ${
                  activeTab === "recent" && "btn-primary"
                }`}
                href="/questions?tab=recent"
              >
                Recent
              </Link>
              <Link
                className={`btn join-item ${
                  activeTab === "top" && "btn-primary"
                }`}
                href="/questions?tab=top"
              >
                Top
              </Link>
            </div>
            <div className="form-control flex-1">
              <input
                type="text"
                placeholder="Search for anything"
                className="input input-bordered w-full md:w-auto"
              />
            </div>
            <button className="btn">
              <AdjustmentsHorizontalIcon className="w-6 h-6" />
              Filters
            </button>
          </div>
        </div>
        <p className="mt-8 text-sm text-white/50">Showing 24 questions</p>

        <div className="mt-4">
          <Question answered />
          <Question />
          <Question />
        </div>

        <div className="flex justify-center">
          <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <aside className="mb-8">
          <h3 className="font-bold text-white/80 uppercase text-md mb-2">
            Patch 2.0
            <span className="badge badge-sm bg-slate-600 border-0 text-white/80 ml-2">
              Current
            </span>
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <CharacterSelect rarity={5} />
            <CharacterSelect rarity={4} />
            <CharacterSelect rarity={4} />
            <CharacterSelect rarity={4} />
          </div>
        </aside>

        <aside className="">
          <h3 className="font-bold text-white/80 uppercase text-md mb-2">
            Patch 2.0
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <CharacterSelect rarity={5} />
            <CharacterSelect rarity={5} />
            <CharacterSelect rarity={5} />
            <CharacterSelect rarity={5} />
          </div>
        </aside>
      </div>
    </div>
  );
}
