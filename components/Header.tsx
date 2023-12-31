import { rsoFont } from "@/utils/fonts";
import Link from "next/link";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog8ToothIcon,
  CubeTransparentIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
export default function Header() {
  return (
    <div className="bg-base-200 border-b border-b-base-300">
      <div className="navbar container mx-auto">
        <div className={rsoFont.className}>
          <Link className="text-4xl flex items-center" href="/">
            <SparklesIcon className="w-8 h-8 text-cyan-300 mr-2" />
            <span className="text-white drop-shadow-logo">StarRail</span>
            <span className="rounded-md text-xs bg-cyan-300 px-1 text-base-100 font-sans font-black ml-2">
              FYI
            </span>
          </Link>
        </div>
        <div className="flex ml-auto">
          <ul className="menu text-md bg-base-200 lg:menu-horizontal rounded-box">
            <li>
              <Link href="/characters">
                <UserGroupIcon className="h-6 w-6 text-teal-500" />
                Characters
              </Link>
            </li>
            <li>
              <Link href="/questions">
                <QuestionMarkCircleIcon className="h-6 w-6 text-amber-500" />
                Q&A
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-sm input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="z-[1] p-2 shadow shadow-xl menu dropdown-content bg-base-300 rounded-box w-52"
            >
              <li className="font-black uppercase text-xs text-white/70 m-2 mb-1 ml-4">
                Reputation
              </li>
              <li>
                <Link href="/profile" className="font-bold">
                  <CubeTransparentIcon className="w-4 h-4 text-blue-500" />
                  3512 • 123
                </Link>
              </li>
              <li className="my-2 mx-1"></li>
              <li className="font-black uppercase text-xs text-white/70 m-2 mb-1 ml-4">
                You
              </li>
              <li>
                <Link href="/">
                  <UserIcon className="h-4 w-4" />
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Cog8ToothIcon className="h-4 w-4" />
                  Settings
                </Link>
              </li>

              <li className="my-2 mx-1"></li>

              <li>
                <Link href="/logout">
                  <ArrowLeftStartOnRectangleIcon className="w-4 h-4" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
