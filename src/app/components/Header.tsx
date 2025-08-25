import Image from "next/image";
import React from "react";
import logo from "@/assets/logosaas.png";
import menuicon from "@/assets/menu.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex h-8 justify-center items-center bg-gray-800 gap-2 text-center text-xs text-white">
        <span className="hidden text-gray-400 sm:inline">
          Streamline your workflow and boost your productivity.
        </span>

        <span className="flex items-center text-gray-200 gap-1">
          Get started for free
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 20 20"
            fill="none"
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>

      <div className="flex w-full absolute backdrop-blur-sm justify-between gap-3 items-center lg:px-20 md:px-14 px-12 py-2">
        <Image src={logo} alt="Saas Logo" width={40} height={40} />

        <div className="sm:hidden">
          <Image src={menuicon} alt="Saas Logo" width={20} height={20} />
        </div>

        <nav className="hidden text-gray-800 sm:flex lg:gap-10 md:gap-8 gap-5 text-center items-center">
          <span>About</span>
          <span>Features</span>
          <span>Customers</span>
          <span>Updates</span>
          <span>Help</span>
          <button className="rounded-lg w-28 h-10 bg-gray-800 text-white">
            Get for free
          </button>
        </nav>
      </div>
    </header>
  );
}
