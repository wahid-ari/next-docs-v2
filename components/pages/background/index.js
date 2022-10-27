import React from "react";
import cn from "classnames";
import { TurboheroBackground } from "./TurboHeroBackground";
import styles from "./index.module.css";
import { FadeIn } from "../FadeIn";

function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <span className={cn(styles.leftLights, "opacity-50 dark:opacity-100")} />
      <span className={cn(styles.rightLights, "opacity-50 dark:opacity-100")} />
      <span className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t dark:from-black from-white to-transparent" />
      <span className="bg-gradient-to-b dark:from-black from-white to-transparent absolute top-[20vh] left-0 w-full h-[50vh]" />
      <TurboheroBackground />
    </div>
  );
}

function LandingPage() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center w-full h-full min-h-screen overflow-hidden [--geist-foreground:#fff] dark:[--geist-foreground:#000] [--gradient-stop-1:0px] [--gradient-stop-2:120px] sm:[--gradient-stop-1:0px] sm:[--gradient-stop-2:120px]">
        <Background />
        <FadeIn className="z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="mx-6 font-extrabold text-5xl lg:text-6xl leading-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">
            Make Ship Happen
          </h1>
          <p className="mx-6 text-xl md:w-[660px] md:text-2xl font-space-grotesk text-center text-[#666666] dark:text-[#888888]">
            Turbo is an incremental bundler and build system optimized for
            JavaScript and TypeScript, written in Rust.
          </p>
        </FadeIn>
      </main>
    </>
  );
}

export default LandingPage;