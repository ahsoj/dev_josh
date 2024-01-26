import Link from "next/link";
import React from "react";
import { PiArrowRightThin } from "react-icons/pi";

const ShowcaseContainer = () => {
  return (
    <div className="py-12">
      <div className="space-y-6">
        <h3 className="font-bold text-brand/[0.9]">Recent Projects</h3>
        <div className=""></div>
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

export default ShowcaseContainer;
