/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";

import { BackgroundGradientAnimation } from "./gradient-bg";
import { GlobeDemo } from "./grid-globe";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import MagicButton from "../magic-button";
import animationData from "@/data/confetti.json";
import { cn } from "@/utils/cn";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copy, setCopy] = useState(false);
  const lottieRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("aliabdulsamad15@gmail.com");
    setCopy(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white justify-between flex flex-col space-y-4 border border-white/0.1",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="h-full w-full absolute">{img && <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center")} />}</div>
        <div className={`absolute right-0 bottom-5 ${id === 5 && "w-full opacity-80"}`}>{spareImg && <img src={spareImg} alt={spareImg} className={"object-cover object-center w-full h-full"} />}</div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" /> */}
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10")}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">{description}</div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">{title}</div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["Rect.js", "Next.js", "Typescript"].map((item) => (
                  <span key={item} className="py-2 px-3 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg[#10132e] ">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["TailwindCSS", "Node.js", "React native"].map((item) => (
                  <span key={item} className="py-2 px-3 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg[#1032e] ">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                {/* @ts-expect-error Server Component */}
                <Lottie
                  ref={lottieRef}
                  options={{
                    loop: copy,
                    autoplay: copy,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <MagicButton title={copy ? "Email copied" : "Copy my email"} icon={<IoCopyOutline />} position="left" otherClasses="!bg-[#161a31]" onClick={handleCopy} />
            </div>
          )}
        </div>
        <div className="group-hover/bento:translate-x-2 transition duration-200"></div>
      </div>
    </div>
  );
};
