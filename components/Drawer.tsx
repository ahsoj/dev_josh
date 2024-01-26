import React from "react";
import Image from "next/image";
import DrawerContent from "./DrawerContent";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { VscMention } from "react-icons/vsc";

type DrawerProps = {};

const Drawer = (...props: DrawerProps[]) => {
  return (
    <aside className="transition-base fixed bottom-0 left-0 top-0 z-50 hidden h-screen w-screen border-r border-secondary bg-brand px-6 py-8 md:flex  md:w-48 xl:w-72">
      <div className="flex w-full flex-col justify-between">
        <div>
          <Link
            href="/"
            className="flex w-full grow flex-col items-center gap-4 border-b border-secondary pb-8 xl:flex-row"
          >
            <div className="overflow-hidden">
              <Image
                src="/dev_josh.png"
                className="h-fit rounded-md object-contain object-center"
                alt=""
                width={70}
                height={70}
                priority
              />
            </div>
            <div className="text-center xl:text-start">
              <h2 className="font-clash text-2xl font-bold">Dev Josh</h2>
              <p className="whitespace-nowrap text-sm">
                Jr. Front-End Engineer
              </p>
            </div>
          </Link>
          <DrawerContent />
        </div>
        <SocialLinks />
      </div>
    </aside>
  );
};

export const SocialLinks = () => {
  return (
    <div className="border-t border-secondary pt-8">
      <div className="flex items-center justify-around gap-1 text-base text-zinc-500 xl:text-lg">
        <Link href="/">
          <IoLogoGithub />
        </Link>
        <Link href="/">
          <FaLinkedin />
        </Link>
        <Link href="/">
          <FaXTwitter />
        </Link>
        <Link href="/">
          <VscMention />
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
