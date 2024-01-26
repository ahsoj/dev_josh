import HeaderContainer from "@/containers/Header";
import ShowcaseContainer from "@/containers/ShowcaseContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="transition-bas">
      <div className="divide-y divide-secondary pb-12 pt-6">
        <div>
          <div>
            <div className="flex w-fit flex-nowrap items-center gap-x-4 rounded-md bg-green-500/[0.1] px-4 py-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600"></span>
              </span>
              <p className="text-xs font-semibold text-green-500">
                # Available to work
              </p>
            </div>
          </div>
          <HeaderContainer />
        </div>
        <ShowcaseContainer />
      </div>
      {/* <img
        src="/1698675816268.png"
        className="block max-w-xs object-contain object-center"
        alt=""
      /> */}
    </main>
  );
}
