import BlogLayout from "components/BlogLayout";
import Image from "next/image";
import Head from "next/head";
import { getBlogpostBySlug, getAllBlogposts } from "lib/blogposts";
import { MDXRemote } from "next-mdx-remote";
import Header from "components/Header";
import components from "components/mdx";
import { Stack } from "components/shared";
import { styled } from "styles";
import Link from "next/link";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function getHeadings(source: string) {
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^##*\s/);
  });

  return headingLines.map((raw) => {
    const text = raw.replace(/^##*\s/, "");
    const level = raw.slice(0, 2) === "##" ? 2 : 1;

    return { text, level };
  });
}

export default function Blogpost({ blogpost, slug }: any) {
  const { mdxSource, frontmatter, links, content } = blogpost;
  const headings = getHeadings(content);

  return (
    <>
      <Head>
        <title key="title">{frontmatter.title}</title>
      </Head>
      <BlogLayout>
        <Header frontmatter={frontmatter} />
        <ContentContainer
          css={{
            "@initial": { gtc: "auto minmax(0, 1fr)" },
            "@bp1": { gtc: "minmax(0, 1fr)" },
          }}
        >
          <ContentSidebar>
            <Stack
              type="row"
              gap={2}
              css={{
                pb: "$4",
                justifyContent: "flex-start",
                "@initial": { justifyContent: "flex-start" },
                "@bp1": { justifyContent: "center" },
              }}
            >
              <AvatarContainer>
                <Avatar
                  src="/images/self.jpg"
                  alt="Picture of the author"
                  width={44}
                  height={44}
                />
              </AvatarContainer>
              <Stack type="column" gap={0}>
                <AuthorName>{frontmatter.author}</AuthorName>
                <AuthorTag>Author</AuthorTag>
              </Stack>
            </Stack>
            <StickyContent
              css={{
                justifyContent: "flex-start",
                "@initial": { justifyContent: "flex-start" },
                "@bp1": { justifyContent: "center" },
              }}
            >
              <Stack
                type="column"
                gap={0}
                css={{
                  gap: "0.25rem",
                }}
              >
                <TableOfContentsHeader>Table of Contents</TableOfContentsHeader>
                {headings.map((heading) => {
                  const link = heading.text.toLowerCase().replace(/ /g, "-");
                  return (
                    <TableOfContentsLink key={heading.text}>
                      <a href={`#${link}`}>{heading.text} </a>
                    </TableOfContentsLink>
                  );
                })}
              </Stack>
              <Stack
                type="column"
                gap={0}
                css={{
                  gap: "0.25rem",
                }}
              >
                <TableOfContentsHeader>Tags</TableOfContentsHeader>
                <p>React</p>
              </Stack>
            </StickyContent>
          </ContentSidebar>
          <Content>
            <MDXRemote {...mdxSource} components={components} />
          </Content>
        </ContentContainer>

        <Stack
          type="row"
          gap={1}
          css={{
            gtc: "1fr 1fr",
            mt: "$5",
            pt: "2rem",
            borderTop: "1px solid $gray10",
            "@initial": {
              gtc: "1fr 1fr",
            },
            "@bp1": {
              gtc: "1fr",
            },
          }}
        >
          <Stack
            type="column"
            gap={1}
            css={{
              span: {
                color: "$indigo11",
                cursor: "pointer",
                "&:hover": { color: "$indigo12" },
              },
            }}
          >
            {links.prev !== null && (
              <>
                <p>Previous</p>
                <h2>{links.prev.headline}</h2>
                <p>{links.prev.description}</p>
                <Link href={`/blog/${links.prev.slug}`}>
                  <span>← Continue Reading</span>
                </Link>
              </>
            )}
          </Stack>

          <Stack
            type="column"
            gap={1}
            css={{
              textAlign: "right",
              span: {
                color: "$indigo11",
                cursor: "pointer",
                "&:hover": { color: "$indigo12" },
              },
            }}
          >
            {links.next !== null && (
              <>
                <p>Next</p>
                <h2>{links.next.headline}</h2>
                <p>{links.next.description}</p>
                <Link href={`/blog/${links.next.slug}`}>
                  <span>Continue Reading →</span>
                </Link>
              </>
            )}
          </Stack>
        </Stack>
      </BlogLayout>
    </>
  );
}

export async function getStaticPaths() {
  const blogposts = getAllBlogposts();

  return {
    paths: blogposts.map((blogpost: any) => {
      return {
        params: {
          slug: blogpost.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const blogpost = await getBlogpostBySlug(params.slug);

  return {
    props: { blogpost, slug: params.slug },
  };
}

const ContentContainer = styled("div", {
  display: "grid",
  gtc: "auto minmax(0, 1fr)",
  gridGap: "2rem",
  position: "relative",
});

const Content = styled("div", {
  display: "grid",
  gridAutoFlow: "row",
  gridGap: "1.5rem",
  minWidth: "0",
  py: "2rem",

  "*": {
    minWidth: "0",
  },

  "p, ol, li": {
    // width: "90%",
    // margin: "0 auto",
  },

  li: {
    listStyle: "inside",
  },

  "code:not([class])": {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    overflowWrap: "normal",
    padding: "0.2rem 0.4rem",
    fontSize: "$1",
    letterSpacing: "0.15px",
    background: "$indigo10",
    color: "#fff",
    br: "4px",
  },
});

const ContentSidebar = styled("aside", {
  py: "2rem",
  position: "relative",
});

const StickyContent = styled("div", {
  position: "sticky",
  top: "2rem",
  display: "grid",
  alignContent: "flex-start",
  gridGap: "$2",
});

const AuthorName = styled("p", {
  whiteSpace: "nowrap",
  color: "$gray12",
  fontWeight: "bold",
  fontSize: "$3",
  lineHeight: 1,
});

const AuthorTag = styled("span", {
  color: "$gray11",
  fontSize: "$2",
});

const AvatarContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Avatar = styled(Image, {
  br: "50%",
  objectFit: "cover",
  m: "0",
});

const ProgressContainer = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "0.25rem",
  zIndex: 1,
});

const ProgressBar = styled(motion.div, {
  size: "100%",
  bg: "$indigo8",
});

const TableOfContentsHeader = styled("p", {
  color: "$slate12",
  fontWeight: "bold",
});

const TableOfContentsLink = styled("p", {
  "&:hover": {
    color: "$slate12",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
});
