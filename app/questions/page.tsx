"use client";

import Question from "@/components/Question";
import {
  AdjustmentsHorizontalIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function QuestionsHomePage() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">sidebar</div>
      <div className="col-span-3">
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
        <div className="flex items-start rounded border border-base-300 bg-textured p-4 pt-[40px]">
          <QuestionMarkCircleIcon className="h-10 w-10 text-amber-500 mr-2" />
          <div className="mr-auto">
            <h1 className="text-3xl font-black">Honkai: Starrail Questions</h1>
            <p className="">
              Community questions and answers, from builds and team comps to
              quests and events
            </p>
          </div>
          <Link href="/questions/ask" className="btn btn-primary">
            Ask Question
          </Link>
        </div>

        <div className="mt-8">
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
                placeholder="Search"
                className="input input-bordered w-full md:w-auto"
              />
            </div>
            <button className="btn">
              <AdjustmentsHorizontalIcon className="w-6 h-6" />
              Filters
            </button>
          </div>
        </div>

        <div className="mt-8">
          <Question />
          <Question />
          <Question />
        </div>
      </div>
    </div>
  );
}
