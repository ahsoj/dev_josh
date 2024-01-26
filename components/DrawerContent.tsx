"use client";
import React from "react";
import Link from "next/link";
import { RiHome3Fill, RiHome3Line } from "react-icons/ri";
import {
  PiUserThin,
  PiUserFill,
  PiNotebookLight,
  PiNotebookFill,
} from "react-icons/pi";
import { MdOutlineWorkOutline, MdOutlineWork } from "react-icons/md";
import { PiStackSimpleFill, PiStackSimpleThin } from "react-icons/pi";
import { TbMailOpened, TbMailOpenedFilled } from "react-icons/tb";
import { MdRememberMe, MdOutlineRememberMe } from "react-icons/md";
import { usePathname } from "next/navigation";
import twmesh from "@/utils/twmesh";

type DrawerContentType = {
  label: string;
  path: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
};

const drawerContent: DrawerContentType[] = [
  {
    label: "Home",
    path: "/",
    icon: <RiHome3Line className="text-2xl" />,
    activeIcon: <RiHome3Fill className="text-2xl" />,
  },
  {
    label: "About",
    path: "/about",
    icon: <PiUserThin className="text-2xl" />,
    activeIcon: <PiUserFill className="text-2xl" />,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: <MdOutlineWorkOutline className="text-2xl" />,
    activeIcon: <MdOutlineWork className="text-2xl" />,
  },
  {
    label: "Skills",
    path: "/skills",
    icon: <PiStackSimpleThin className="text-2xl" />,
    activeIcon: <PiStackSimpleFill className="text-2xl" />,
  },
  {
    label: "Blog",
    path: "/blog",
    icon: <PiNotebookLight className="text-2xl" />,
    activeIcon: <PiNotebookFill className="text-2xl" />,
  },
  {
    label: "Resume",
    path: "/resume",
    icon: <MdOutlineRememberMe className="text-2xl" />,
    activeIcon: <MdRememberMe className="text-2xl" />,
  },
  // {
  //   label: "Contact",
  //   path: "/contact",
  //   icon: <TbMailOpened className="text-2xl" />,
  //   activeIcon: <TbMailOpenedFilled className="text-2xl" />,
  // },
];

const DrawerContent = ({
  navigation = false,
  toggleHandler,
}: {
  navigation?: boolean;
  toggleHandler?: () => void;
}) => {
  const pathname = usePathname();
  return (
    <div className="py-12">
      <div className="flex flex-col">
        {drawerContent.map((tab, idx) => (
          <Link
            onClick={toggleHandler}
            className={twmesh(
              "transition-base group/tab flex flex-nowrap items-center justify-center gap-3 rounded-md px-4 py-4 font-light text-zinc-500 hover:bg-secondary xl:justify-normal",
              pathname === tab.path && "text-primary",
              navigation && "justify-start pl-20",
            )}
            href={tab.path}
            key={idx}
          >
            <div
              className="invisible absolute z-10 inline-block rounded-md border bg-white px-4 py-3 text-sm text-gray-600 opacity-0 shadow-md transition-opacity md:group-hover/tab:visible md:group-hover/tab:opacity-100 xl:group-hover/tab:invisible xl:group-hover/tab:opacity-0"
              role="tooltip"
            >
              {tab.label}
            </div>
            <span>{pathname === tab.path ? tab.activeIcon : tab.icon}</span>
            <span
              className={twmesh(
                "transition-base hidden p-2 text-base xl:block",
                navigation && "block",
              )}
            >
              {tab.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DrawerContent;
