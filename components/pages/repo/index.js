import Image from "next/future/image";
import { Gradient } from "./Gradient";
import { FadeIn } from "../FadeIn";

export default function Repo() {
  return (
    <main className="relative min-h-screen">
      <FadeIn
        noVertical
        className="font-sans pt-48 w-auto flex justify-between gap-8 items-center flex-col relative z-0"
      >
        <FadeIn className="z-50 flex items-center justify-center w-full ">
          <div className="absolute min-w-[614px] min-h-[614px]">
            <Image
              alt="Turborepo"
              src="/repo/repo-hero-circles-dark.svg"
              width={614}
              height={614}
              className="hidden dark:block"
            />
            <Image
              alt="Turborepo"
              src="/repo/repo-hero-circles-light.svg"
              width={614}
              height={614}
              className="block dark:hidden"
            />
          </div>
          <div className="absolute z-50 flex items-center justify-center w-64 h-64">
            <Gradient
              small
              width={120}
              height={120}
              conic
              className="dark:opacity-100 opacity-40"
            />
          </div>
          <div className="w-[120px] h-[120px] z-50">
            <Image
              alt=""
              src={`/repo/repo-hero-logo-dark.svg`}
              width={120}
              height={120}
              className="hidden dark:block"
            />
            <Image
              alt=""
              src={`/repo/repo-hero-logo-light.svg`}
              width={120}
              height={120}
              className="block dark:hidden"
            />
          </div>
        </FadeIn>
        <Gradient
          width={1000}
          height={1000}
          className="top-[-500px] dark:opacity-20 opacity-[0.15]"
          conic
        />
        <div className="absolute top-0 z-10 w-full h-48 dark:from-black from-white to-transparent bg-gradient-to-b" />
        <FadeIn
          delay={0.15}
          className="z-50 flex flex-col items-center justify-center text-center mt-16 mx-6"
        >
          <h1 className="text-5xl uppercase font-bold mb-4">TURBOREPO</h1>
          <h2 className="text-3xl font-semibold">The build system that makes ship happen</h2>
          <p className="text-xl">
            Turborepo is a high-performance build system for JavaScript and TypeScript codebases.
          </p>
        </FadeIn>
      </FadeIn>
    </main>
  );
}