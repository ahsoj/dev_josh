"use client";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import { useEffect, useState } from "react";
import twmesh from "@/utils/twmesh";
import DrawerContent from "./DrawerContent";
import { SocialLinks } from "./Drawer";
const Navigation = () => {
  const [activate, setActivate] = useState<boolean>(false);
  const togglehandler = () => {
    setActivate(!activate);
  };
  useEffect(() => {
    document.body.style.overflow = activate ? "hidden" : "initial";
  }, [activate]);

  return (
    <header
      className={twmesh(
        "border-secondary transition-base bg-brand fixed z-50 h-20 w-screen border-b px-4 md:hidden",
        activate && "transition-base h-screen",
      )}
    >
      <nav
        className={twmesh(
          "flex w-full flex-nowrap items-center justify-between gap-4 py-4",
          activate && "border-secondary border-b",
        )}
      >
        <div className="flex w-full grow flex-row items-center gap-4">
          <div className="overflow-hidden">
            <Image
              src="/dev_josh.png"
              className="h-fit rounded-md object-contain object-center"
              alt=""
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="text-start">
            <h2 className="font-clash text-xl font-bold">Dev Josh</h2>
            <p className="whitespace-nowrap text-xs">Full-Stack engineer</p>
          </div>
        </div>
        <HamburgerMenu activate={activate} togglehandler={togglehandler} />
      </nav>
      <div
        className={twmesh(
          "transition-base relative hidden h-[75%] w-screen justify-between",
          activate && "flex flex-col",
        )}
      >
        <DrawerContent navigation />
        <SocialLinks />
      </div>
    </header>
  );
};

export default Navigation;
