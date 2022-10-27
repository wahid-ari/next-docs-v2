import { FadeIn } from "@components/pages/FadeIn";
import { Turborepo } from "./Turborepo";
import { Turbopack } from "./Turbopack";
import { useState } from "react";
import Link from "next/link"
import cn from "classnames";
import styles from "./index.module.css";
import { motion } from "framer-motion";

function Card({
  href,
  title,
  icon,
  children,
}) {
  const [hovering, setHovering] = useState(false);
  return (
    <Link href={href}>
      <a
        className={cn(
          styles["counter-border"],
          "no-underline shadow hover:shadow-none dark:border dark:border-neutral-800 dark:hover:border-neutral-900"
        )}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <motion.i
          initial="hidden"
          animate={hovering ? "active" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            active: { opacity: 1 },
          }}
          aria-hidden="true"
        ></motion.i>
        <div className="p-8 rounded-xl">
          <div className="flex items-center justify-center mb-4">
            {icon}
          </div>
          <div className="flex justify-center w-[260px]">
            <span className="text-2xl no-underline my-2 font-bold text-neutral-800 dark:text-gray-200 tracking-wide">{title}</span>
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
}

function SiteCards() {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-6">
      <FadeIn delay={0.1}>
        <Card
          title="TURBOREPO"
          icon={<Turborepo />}
          href="/blog"
        >
        </Card>
      </FadeIn>
      <FadeIn delay={0.2}>
        <Card
          title="TURBOPACK"
          icon={<Turbopack />}
          href="/blog"
        >
        </Card>
      </FadeIn>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <FadeIn>
        <h1 className="font-extrabold text-5xl lg:text-6xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">
          Make Ship Happen
        </h1>
        <p className="mx-6 mb-12 text-xl md:text-2xl text-center text-[#666666] dark:text-[#888888]">
          Turbo is an incremental bundler and build system optimized for
          JavaScript and TypeScript, written in Rust.
        </p>
      </FadeIn>
      <SiteCards />
    </div>
  );
}