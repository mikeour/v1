import Link from "next/link";
import Image from "next/image";
import CodeBlock from "./CodeBlock";
import Button from "components/Button";

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
  h1: ({ children }: { children: string }) => {
    const link = children.toLowerCase().replace(/ /g, "-");

    return <h1 id={link}>{children}</h1>;
  },
  h2: ({ children }: { children: string }) => {
    const link = children.toLowerCase().replace(/ /g, "-");

    return <h2 id={link}>{children}</h2>;
  },
  code: CodeBlock,
  a: CustomLink,
  Image,
};
