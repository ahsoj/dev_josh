import React from "react";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";

const HeaderContainer = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col gap-4">
        <h1 className="font-black text-brand">
          Hey there !<br />
          I&#39;m Josh...
        </h1>
        <div className="max-w-md">
          <p className="text-normal text-base text-brand/[0.5]">
            A Front-End Web Developer building the Frontend and work closely
            with Backend of Websites and Web Applications that leads to the
            success of the overall products.
          </p>
        </div>
        <Link
          className="group/button button-base flex w-full items-center justify-center gap-3 xs:w-fit"
          href="/about"
        >
          <span className="text-brand/[0.7]">More about me</span>
          <span>
            <PiArrowRightThin className="transition-base mt-0.5 -rotate-45 text-xl group-hover/button:rotate-0" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderContainer;
