import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import next from "../public/platform/next.png";
import nextLight from "../public/platform/next-light.png";
import vercel from "../public/platform/vercel.png";
import react from "../public/platform/react.png";
import vue from "../public/platform/vue.png";
import nuxt from "../public/platform/nuxt.png";
import svelte from "../public/platform/svelte.png";
import solid from "../public/platform/solid.png";
import angular from "../public/platform/angular.png";

export default function Framework() {
  return (
    <div className="my-4 grid md:grid-cols-3 gap-4">
      <Link href="/docs">
        <a className="no-underline">
          <div className="p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0 mb-2">Auth</h3>
            <p className="text-neutral-700 dark:text-gray-300 !m-0">User management</p>
          </div>
        </a>
      </Link>
      <Link href="/libs/sandpack">
        <a className="no-underline">
          <div className="p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0 mb-2">Database</h3>
            <p className="text-neutral-700 dark:text-gray-300 !m-0">Scalable Postgres database</p>
          </div>
        </a>
      </Link>
      <Link href="/blog">
        <a className="no-underline">
          <div className="p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0 mb-2">Edge Functions</h3>
            <p className="text-neutral-700 dark:text-gray-300 !m-0">Server-side functions.</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export function Item() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (window != undefined) {
      if (localStorage.getItem("theme") == "light") {
        setDarkMode(false)
      } else setDarkMode(true)
    }
  }, [])

  return (
    <div className="my-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      <a className="no-underline" href="https://nextjs.org/" target="_blank" rel="noopener">
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
          {darkMode ? <Image src={nextLight} alt="Logo" width={32} height={32} /> : <Image src={next} alt="Logo" width={32} height={32} />}
          <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0">Next</h3>
        </div>
      </a>

      <a className="no-underline" href="https://vercel.com/" target="_blank" rel="noopener">
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
          <Image src={vercel} alt="Logo" width={32} height={32} />
          <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0">Vercel</h3>
        </div>
      </a>

      <a className="no-underline" href="https://reactjs.org/" target="_blank" rel="noopener">
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
          <Image src={react} alt="Logo" width={32} height={32} />
          <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0">React</h3>
        </div>
      </a>

      <a className="no-underline" href="https://vuejs.org/" target="_blank" rel="noopener">
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
          <Image src={vue} alt="Logo" width={32} height={32} />
          <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0">Vue</h3>
        </div>
      </a>

      <a className="no-underline" href="https://nuxtjs.org/" target="_blank" rel="noopener">
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
          <Image src={nuxt} alt="Logo" width={32} height={32} />
          <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0">Nuxt</h3>
        </div>
      </a>

      <a className="no-underline" href="https://angular.io/" target="_blank" rel="noopener">
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
          <Image src={angular} alt="Logo" width={32} height={32} />
          <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0">Angular</h3>
        </div>
      </a>

      <a className="no-underline" href="https://svelte.dev/" target="_blank" rel="noopener">
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
          <Image src={svelte} alt="Logo" width={32} height={32} />
          <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0">Svelte</h3>
        </div>
      </a>

      <a className="no-underline" href="https://www.solidjs.com/" target="_blank" rel="noopener">
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-md hover:cursor-pointer border border-gray-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
          <Image src={solid} alt="Logo" width={32} height={32} />
          <h3 className="text-neutral-900 dark:text-gray-100 text-lg m-0">Solid</h3>
        </div>
      </a>
    </div>
  )
}