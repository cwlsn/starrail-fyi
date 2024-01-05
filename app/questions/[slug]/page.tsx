import {
  CheckBadgeIcon,
  CubeTransparentIcon,
  UserIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  MinusIcon,
  PlusIcon,
  ChevronDoubleUpIcon,
  ChatBubbleLeftRightIcon,
  BellAlertIcon,
  FaceSmileIcon,
  BookmarkIcon,
  FlagIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import placeholder from "@/public/placeholder-sq.webp";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { rsoFont } from "@/utils/fonts";

export default function SingleQuestion() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="font-bold breadcrumbs mb-4">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Questions</Link>
            </li>
            <li>Heyo</li>
          </ul>
        </div>
        <div className="flex mb-6 pb-6 border-b border-b-base-content/20">
          <div className="flex flex-col w-20 items-center">
            <div className="avatar drop-shadow-xl">
              <div className="w-20 h-20 mask mask-hexagon">
                <Image src={placeholder} alt="cats" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ChevronUpIcon className="h-12 w-12 text-white/30" />
              <span className="text-2xl font-black text-white/80">46</span>
              <ChevronDownIcon className="h-12 w-12 text-white/20" />
              <div className="flex gap-1">
                <BookmarkIcon className="w-4 h-4" />
                <FlagIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="ml-4">
            <div className="flex gap-1 mb-2">
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
            <h3 className="text-2xl font-bold text-white/90 leading-tight">
              <Link href="/questions/asdasd" className="hover:underline">
                How do you finish the boxing event in so few cycles?? How do you
                finish the boxing event in so few cycles??
              </Link>
            </h3>
            <div className="flex gap-1 mt-2 font-bold items-center text-white/40">
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
            <div className={`prose mt-2`}>
              <p className="">
                Imagine you're in a tall building with a cat. The cat can
                survive a fall out of a low story window, but will die if thrown
                from a high floor. How can you figure out the longest drop that
                the cat can survive, using the least number of attempts?
              </p>
              <p>
                Obviously, if you only have one cat, then you can only search
                linearly. First throw the cat from the first floor. If it
                survives, throw it from the second. Eventually, after being
                thrown from floor f, the cat will die. You then know that floor
                f-1 was the maximal safe floor.
              </p>

              <div className="flex gap-1 mb-2">
                <div className="dropdown dropdown-top dropdown-center">
                  <div
                    role="button"
                    tabIndex={0}
                    className="btn btn-ghost btn-square btn-sm focus:bg-base-300"
                  >
                    <FaceSmileIcon className="h-6 w-6 text-white/50" />
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content mb-1 z-[1] p-1 shadow-2xl bg-base-300 rounded-xl flex flex-row gap-1 border-2 border-white/10"
                  >
                    <button className="btn btn-ghost btn-square btn-info btn-sm">
                      🐈
                    </button>
                    <button className="btn btn-ghost btn-square btn-info btn-sm">
                      🐈
                    </button>
                    <button className="btn btn-ghost btn-square btn-info btn-sm">
                      🐈
                    </button>
                    <button className="btn btn-ghost btn-square btn-info btn-sm">
                      🐈
                    </button>
                  </div>
                </div>

                <button className="btn btn-outline btn-info btn-sm">
                  🐈 32
                </button>
                <button className="btn btn-outline btn-info btn-sm">
                  🐈 32
                </button>
              </div>
            </div>

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
                <BellAlertIcon className="w-5 h-5 text-red-500" />
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        <h3 className="text-xl mb-4 font-bold">4 answers</h3>

        <div className="alert answer mb-6 border-2 border-green-500 items-start">
          <CheckBadgeIcon className="h-12 w-12 text-green-500 absolute top-2 right-2" />
          <div className="flex flex-col items-center gap-1">
            <ChevronUpIcon className="h-12 w-12 text-white/30" />
            <span className="text-2xl font-black text-white/80">46</span>
            <ChevronDownIcon className="h-12 w-12 text-white/20" />
            <div className="flex gap-1">
              <BookmarkIcon className="w-4 h-4" />
              <FlagIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="flex-col relative">
            <div className="prose ">
              <h4 className="text-green-500 uppercase text-sm">
                Selected Answer
              </h4>
              <p className="">
                Imagine you're in a tall building with a cat. The cat can
                survive a fall out of a low story window, but will die if thrown
                from a high floor. How can you figure out the longest drop that
                the cat can survive, using the least number of attempts?
              </p>
              <p className="">
                Imagine you're in a tall building with a cat. The cat can
                survive a fall out of a low story window, but will die if thrown
                from a high floor. How can you figure out the longest drop that
                the cat can survive, using the least number of attempts?
              </p>
            </div>
            <div className="flex gap-1 mt-4 font-bold items-center text-white/40">
              <UserIcon className="w-5 h-5" />
              <Link
                href="/users/asdas"
                className="text-sm font-bold mr-2 no-underline text-amber-500 hover:text-white/90"
              >
                quills <span className="font-normal text-white/40">(2002)</span>
              </Link>
              <ClockIcon className="w-5 h-5" />
              <span className="text-sm font-normal mr-2">69 hours ago</span>
              <ChatBubbleLeftIcon className="w-5 h-5" />
              <Link
                href="/asds"
                className="text-sm font-normal mr-2 no-underline"
              >
                4 replies
              </Link>
            </div>
          </div>
        </div>

        <div className="alert answer mb-6 border-2 border-white/10 items-start">
          <div className="flex flex-col items-center gap-1">
            <ChevronUpIcon className="h-12 w-12 text-white/30" />
            <span className="text-2xl font-black text-white/80">46</span>
            <ChevronDownIcon className="h-12 w-12 text-white/20" />
          </div>
          <div className="flex-col">
            <div className="prose">
              <h4 className=" uppercase text-sm">Answer</h4>
              <p className="">
                Imagine you're in a tall building with a cat. The cat can
                survive a fall out of a low story window, but will die if thrown
                from a high floor. How can you figure out the longest drop that
                the cat can survive, using the least number of attempts?
              </p>
              <p className="">
                Imagine you're in a tall building with a cat. The cat can
                survive a fall out of a low story window, but will die if thrown
                from a high floor. How can you figure out the longest drop that
                the cat can survive, using the least number of attempts?
              </p>
            </div>
            <div className="flex gap-1 mt-4 font-bold items-center text-white/40">
              <UserIcon className="w-5 h-5" />
              <Link
                href="/users/asdas"
                className="text-sm font-bold mr-2 no-underline text-amber-500 hover:text-white/90"
              >
                quills <span className="font-normal text-white/40">(2002)</span>
              </Link>
              <ClockIcon className="w-5 h-5" />
              <span className="text-sm font-normal mr-2">69 hours ago</span>
              <ChatBubbleLeftIcon className="w-5 h-5" />
              <Link
                href="/asds"
                className="text-sm font-normal mr-2 no-underline"
              >
                4 replies
              </Link>
            </div>
          </div>
        </div>

        <div className="alert mb-4 border-2 border-white/10 items-start">
          form
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <div className="">
          <Link
            href="/questions/ask"
            className="btn btn-lg btn-primary btn-outline"
          >
            <QuestionMarkCircleIcon className="w-6 h-6" />
            Ask a question
          </Link>
        </div>

        <div className="border border-white/10 p-3 rounded">
          <h4 className="uppercase font-black text-sm">Mentioned</h4>
          <div className="">
            <div className="avatar drop-shadow-xl">
              <div className="w-10 h-10 mask mask-hexagon">
                <Image src={placeholder} alt="cats" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className={`${rsoFont.className} text-white text-2xl`}>
            Related
          </h2>

          <div className="flex items-start mb-3">
            <Link href="/questions/asdasdas" className="">
              How do you finish the boxing event in so few cycles?? How do you
              finish the boxing event in so few cycles??
            </Link>
            <span className="bg-green-900 ml-3 px-2 py-1 rounded font-black text-white/90">
              56
            </span>
          </div>
          <div className="flex items-start mb-3">
            <Link href="/questions/asdasdas" className="">
              How do you finish the boxing event in so few cycles?? How do you
              finish the boxing event in so few cycles??
            </Link>
            <span className="bg-green-900 ml-3 px-2 py-1 rounded font-black text-white/90">
              56
            </span>
          </div>
          <div className="flex items-start mb-3">
            <Link href="/questions/asdasdas" className="">
              How do you finish the boxing event in so few cycles?? How do you
              finish the boxing event in so few cycles??
            </Link>
            <span className="bg-green-900 ml-3 px-2 py-1 rounded font-black text-white/90">
              56
            </span>
          </div>
        </div>

        <div className="">
          <h2 className={`${rsoFont.className} text-white text-2xl`}>
            Related
          </h2>

          <div className="flex items-start mb-3">
            <Link href="/questions/asdasdas" className="">
              How do you finish the boxing event in so few cycles?? How do you
              finish the boxing event in so few cycles??
            </Link>
            <span className="bg-green-900 ml-3 px-2 py-1 rounded font-black text-white/90">
              56
            </span>
          </div>
          <div className="flex items-start mb-3">
            <Link href="/questions/asdasdas" className="">
              How do you finish the boxing event in so few cycles?? How do you
              finish the boxing event in so few cycles??
            </Link>
            <span className="bg-green-900 ml-3 px-2 py-1 rounded font-black text-white/90">
              56
            </span>
          </div>
          <div className="flex items-start mb-3">
            <Link href="/questions/asdasdas" className="">
              How do you finish the boxing event in so few cycles?? How do you
              finish the boxing event in so few cycles??
            </Link>
            <span className="bg-green-900 ml-3 px-2 py-1 rounded font-black text-white/90">
              56
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
