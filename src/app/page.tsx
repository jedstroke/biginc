/* eslint-disable @next/next/no-img-element */
"use client";
import Hero from "@components/Hero";
import PlayVideo from "@components/icons/PlayVideo";
import Karaoke from "@components/Karaoke";
import { Button } from "@components/ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import emoji from "react-easy-emoji";
import { SocialIcon } from "react-social-icons";
export default function Page() {
  return (
    <main className="w-full h-full max-w-screen-2xl mx-auto">
      <Hero />
      <section className="py-8 max-md:py-4 relative max-md:top-32 w-full">
        <h2 className="text-2xl text-ourWhite text-center">
          <span className="text-gray-400">𝅗𝅥♭♯</span> SINGING SUN{" "}
          <span className="text-gray-400">♪♫</span>
        </h2>
        <Karaoke />
      </section>
      <section className="base:max-md:px-3 py-8 px-10 min-h-80 text-ourWhite mb-10 w-full">
        <h2 className="text-2xl mb-20 base:max-md:text-xl tracking-wide font-lighten font-bold">
          <span className="text-gray-400">*</span>SOME INSTA VISTA
        </h2>
        <div className="flex w-full  my-10 mfer">
          <div className="flex max-sm:w-full flex-col">
            <div className="w-[100%] min-[630px]:w-[600px] flex justify-center items-center relative">
              <img
                className="h-[400px] blur-[2px] brightness-50 w-full object-cover"
                src={"/assets/img/insta-thumbs/thumb1.jpg"}
                alt="Instagram Thumbnail"
              />
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C2EsFbtKWTR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                className="absolute cursor-pointer z-10"
              >
                <PlayVideo />
              </a>
            </div>
            <h3 className="text-xl font-lighten my-5">
              THEY ALWAYS HAUNT MY DREAMS
            </h3>
            <div>
              <a
                href="https://www.instagram.com/reel/C2EsFbtKWTR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <Button
                  className="w-30"
                  style={{ color: "black" }}
                  variant={"outline"}
                >
                  <InstagramLogoIcon />{" "}
                  <span className="left-1 top-[1px] relative">WATCH</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full  my-10 mfer">
          <div className="flex max-sm:w-full flex-col">
            <div className="w-[100%] min-[630px]:w-[600px] flex justify-center items-center relative">
              <img
                className="h-[400px] blur-[2px] brightness-50 w-full object-cover"
                src={"/assets/img/insta-thumbs/thumb2.jpg"}
                alt="Instagram Thumbnail"
              />
              <a
                target="_blank"
                href="https://www.instagram.com/reel/Cs3F_eJKay4/"
                className="absolute z-10"
              >
                <PlayVideo />
              </a>
            </div>
            <h3 className="text-xl font-lighten my-5">ALL MY LIFE (COVER)</h3>
            <div>
              <a
                href="https://www.instagram.com/reel/Cs3F_eJKay4/"
                target="_blank"
              >
                <Button
                  className="w-30"
                  style={{ color: "black" }}
                  variant={"outline"}
                >
                  <InstagramLogoIcon />{" "}
                  <span className="left-1 top-[1px] relative">WATCH</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full my-10 mfer">
          <div className="flex max-sm:w-full flex-col">
            <div className="w-[100%] min-[630px]:w-[600px] flex justify-center items-center relative">
              <img
                className="h-[400px] blur-[2px] brightness-50 w-full object-cover"
                src={"/assets/img/insta-thumbs/thumb3.png"}
                alt="Instagram Thumbnail"
              />
              <a
                href="https://www.instagram.com/reel/C5lKyRLqz6z/"
                target="_blank"
                className="absolute z-10"
              >
                <PlayVideo />
              </a>
            </div>
            <h3 className="text-xl font-lighten my-5">FREEFORM BALLET</h3>
            <div>
              <a
                href="https://www.instagram.com/reel/C5lKyRLqz6z/"
                target="_blank"
              >
                <Button
                  className="w-30"
                  style={{ color: "black" }}
                  variant={"outline"}
                >
                  <InstagramLogoIcon />{" "}
                  <span className="left-1 top-[1px] relative">WATCH</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full my-10 mfer">
          <div className="flex max-sm:w-full flex-col">
            <div className="w-[100%] min-[630px]:w-[600px] flex justify-center items-center relative">
              <img
                className="h-[400px] blur-[2px] brightness-50 w-full object-cover"
                src={"/assets/img/insta-thumbs/thumb4.jpg"}
                alt="Instagram Thumbnail"
              />
              <a
                href="https://www.instagram.com/reel/C7-l36DCflV/?utm_source=ig_web_copy_link"
                target="_blank"
                className="absolute z-10"
              >
                <PlayVideo />
              </a>
            </div>
            <h3 className="text-xl font-lighten my-5">OLD TESTAMENT GOD</h3>
            <div>
              <a
                href="https://www.instagram.com/reel/C7-l36DCflV/?utm_source=ig_web_copy_link"
                target="_blank"
              >
                <Button
                  className="w-30"
                  style={{ color: "black" }}
                  variant={"outline"}
                >
                  <InstagramLogoIcon />{" "}
                  <span className="left-1 top-[1px] relative">WATCH</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="base:max-md:px-3 text-ourWhite py-2 px-10 h-fit w-full">
        <div className="w-full">
          <h2 className="bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent font-bolden base:max-md:text-[45px] text-8xl base:max-md:tracking-[-.05em] tracking-tightest base:max-md:[word-spacing:-7px] text-center">
            EBRUVWIYO ABEKE
          </h2>
          <p className="max-w-[1000px] w-fit mx-auto font-thin poppins-light text-center py-5">
            Big Inc is a multidisciplinary creative from Delta State, Nigeria,
            known for his exceptional talent in songwriting, singing, rapping,
            and art curation. A highly skilled and technically gifted rapper, he
            stands out in the Nigerian hip hop scene. In his spare time, he
            delves into complex narratives, exploring themes from spirituality
            to love and human nature in his lyrics. Balancing mathematics,
            literature, and music during his undergrad years, he earned a
            bachelor&apos;s degree in mathematics from Delta State University,
            Abraka. With his unique artistic approach, Big Inc is poised to
            become one of Nigeria&apos;s greatest rappers.
          </p>
        </div>
      </section>
      <footer className="w-full border-t border-gray-600 base:max-md:px-3 text-ourWhite py-8 px-10 min-h-40">
        <p className="text-2xl base:max-md:text-xl tracking-wide w-full text-center font-lighten font-bold">
          FOLLOW BIG INC
        </p>
        <div className="flex w-full py-5 justify-center gap-5 items-center">
          <SocialIcon
            bgColor={"#222835"}
            style={{ width: "32px", height: "32px" }}
            url="https://x.com/God_Man_Machine"
          />
          <SocialIcon
            bgColor={"#222835"}
            style={{ width: "32px", height: "32px" }}
            url="https://www.instagram.com/big_inc_/"
          />
          <SocialIcon
            bgColor={"#222835"}
            style={{ width: "32px", height: "32px" }}
            url="https://discord.gg/XkAHafhGjp"
          />
        </div>
        <div className="max-sm:flex-col flex py-5 max-sm:items-center max-sm:gap-5 text-gray-400 justify-between w-full">
          <span className="poppins-light uppercase">
            © {new Date().getFullYear()} Big Inc. all rights reserved.
          </span>
          <span className="w-fit uppercase text-gray-400 poppins-light gap-1 flex items-center  break-keep">
            Made With {emoji("❤")}{" "}
            <a
              className="text-ourWhite"
              href="https://www.jedshock.com"
              target="_blank"
            >
              Jedshock
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
