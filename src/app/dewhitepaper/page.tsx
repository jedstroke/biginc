/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@components/ui/button";

export default function Page() {
  return (
    <main className="w-full h-full max-w-screen-2xl mx-auto">
      <header className="py-10 base:max-md:px-3 px-10 items-center border-b border-gray-600 max-md:py-4 flex relative max-md:top-32 w-full">
        <div className="w-fit">
          <p className="bg-gradient-to-t from-gray-400 mb-3 base:max-md:text-6xl text-8xl to-white bg-clip-text text-transparent font-bolden">
            deWHITEPAPER <span className="from-gray-400 text-[25px]">noun</span>
          </p>
          <div className="p-4">
            <div className="mx-auto px-6 relative min-h-32 border-l-gray-600 border-l-2 border-dashed">
              <div id="timeline-item" className="text-ourWhite flex  mb-5">
                <span className="absolute flex items-center justify-center -left-[23px] bg-darkBg rounded w-10 h-10">
                  1
                </span>
                <div className="relative top-[8px]">
                  <dd className="poppins-regular">
                    : a{" "}
                    <span className="poppins-regular line-through">
                      government
                    </span>{" "}
                    report on any subject/a detailed or{" "}
                    <span className="poppins-regular line-through">
                      authoritative
                    </span>{" "}
                    report
                  </dd>
                  <dd className="poppins-regular line-through">
                    <i className="italic">especially :</i> a British publication
                    that is usually less extensive than a blue book
                  </dd>
                </div>
              </div>
              <div id="timeline-item" className="text-ourWhite flex">
                <span className="absolute flex items-center justify-center -left-[23px] bg-darkBg rounded w-10 h-10">
                  2
                </span>
                <div className="relative top-[8px]">
                  <dd className="poppins-regular">
                    : a detailed description with reports from deBlockchain of
                    the project targeted at deGens & deFans.
                  </dd>
                  <dd className="poppins-regular">
                    for example: I got the whale&apos;s share of Inc&apos;s
                    deWhitepaper—I am bullish on his movement.
                  </dd>
                  <dd className="flex h-fit items-end mt-3 gap-3">
                    <span>
                      ...connect your wallet if you wanna own a share, or see
                      your share
                    </span>
                    <Button
                      className="w-30"
                      style={{ color: "black" }}
                      variant={"outline"}
                    >
                      Connect Wallet
                    </Button>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
