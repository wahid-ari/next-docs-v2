import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";

export default function BlogIndex({ more = "Read more" }) {
  return getPagesUnderRoute("/blog").map((page, index) => {
    // Alias `<a>` to avoid it being replaced by MDX components.
    const A = "a";
    return (
      <div key={index + 1} className="">
        <h3>
          <Link href={page.route}>
            <A style={{ color: "inherit", textDecoration: "none" }}>
              {page.meta?.title || page.frontMatter?.title || page.name}
            </A>
          </Link>
        </h3>
        <p className="opacity-80 !mt-0 pt-3">
          {page.frontMatter?.description}{" "}
          <Link href={page.route}>{more + " ➔"}</Link>
        </p>
        {page.frontMatter?.date ? (
          <p className="text-gray-500 text-sm !mt-0 pt-2.5">{page.frontMatter.date}</p>
        ) : null}
        <hr className="border-t dark:border-neutral-800" />
      </div>
    );
  });
}