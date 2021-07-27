import Link from "next/link";
import Image from "next/image";
import CodeBlock from "./CodeBlock";
import { slugify } from "utils";

function HeaderOne({ children }: { children: string }) {
  const id = slugify(children);

  return <h1 id={id}>{children}</h1>;
}

function HeaderTwo({ children }: { children: string }) {
  const id = slugify(children);

  return <h2 id={id}>{children}</h2>;
}

function CustomLink(props: any) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

export default {
  h1: HeaderOne,
  h2: HeaderTwo,
  code: CodeBlock,
  a: CustomLink,
  Image,
};
