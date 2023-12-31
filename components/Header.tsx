import Link from "next/link";
import {
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Racing_Sans_One as RSO } from "next/font/google";

const rsoFont = RSO({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className="bg-base-200 border-b border-b-base-300">
      <div className="navbar container mx-auto">
        <div className={`flex-1 ${rsoFont.className}`}>
          <Link
            className="btn btn-ghost text-3xl p-0 hover:bg-inherit"
            href="/"
          >
            <span className="text-white drop-shadow-logo">StarRail</span>
            <span className="badge bg-accent text-base-100 font-sans font-black">
              FYI
            </span>
          </Link>
        </div>
        <div className="flex">
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
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
