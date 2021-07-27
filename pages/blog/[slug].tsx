import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import BlogLayout from "components/BlogLayout";
import Header from "components/Header";
import components from "components/mdx";
import { Stack } from "components/shared";
import { getBlogpostBySlug, getAllBlogposts } from "lib/blogposts";
import { styled } from "styles";
import { getHeadings, slugify } from "utils";
import blogpostStyles from "styles/blogpost";

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
        <ContentContainer>
          <ContentSidebar>
            <AuthorContainer type="row" gap={2}>
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
            </AuthorContainer>
            <StickyContent>
              <Stack type="column" gap={2}>
                <TableOfContentsHeader>Table of Contents</TableOfContentsHeader>
                {headings.map((heading) => {
                  return (
                    <TableOfContentsLink key={heading.text}>
                      <a href={`#${heading.link}`}>{heading.text} </a>
                    </TableOfContentsLink>
                  );
                })}
              </Stack>
              <Stack type="column" gap={2}>
                <TableOfContentsHeader>Tags</TableOfContentsHeader>
                <TableOfContentsLink>React</TableOfContentsLink>
              </Stack>
            </StickyContent>
          </ContentSidebar>
          <Content className={blogpostStyles()}>
            <MDXRemote {...mdxSource} components={components} />
          </Content>
        </ContentContainer>

        <ExtraLinksContainer type="row" gap={4}>
          <ExtraLink type="column" gap={1}>
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
          </ExtraLink>

          <ExtraLink type="column" gap={1} alignRight>
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
          </ExtraLink>
        </ExtraLinksContainer>
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
  gtc: "1fr minmax(0, 2.5fr)",
  gridGap: "2rem",
  position: "relative",
  "@initial": { gtc: "auto minmax(0, 1fr)" },
  "@bp1": { gtc: "minmax(0, 1fr)" },
});

const Content = styled("div", {
  display: "grid",
  gridAutoFlow: "row",
  gridGap: "1.5rem",
  minWidth: "0",
  py: "2rem",
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
  gridGap: "$4",
  justifyContent: "flex-start",
  "@initial": { justifyContent: "flex-start" },
  "@bp1": { justifyContent: "center" },
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

const TableOfContentsHeader = styled("p", {
  color: "$slate12",
  fontWeight: "bold",
  mb: "-0.75rem",
});

const TableOfContentsLink = styled("p", {
  // ml: "1rem",
  "&:hover": {
    color: "$slate12",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
});

const ExtraLinksContainer = styled(Stack, {
  gtc: "1fr 1fr",
  mt: "$5",
  pt: "2rem",
  alignItems: "flex-start",
  borderTop: "1px solid $gray10",
  "@initial": {
    gtc: "1fr 1fr",
  },
  "@bp1": {
    gtc: "1fr",
    gridAutoFlow: "row !important",
  },
});

const ExtraLink = styled(Stack, {
  span: {
    color: "$indigo11",
    cursor: "pointer",
    "&:hover": { color: "$indigo12" },
  },

  variants: {
    alignLeft: {
      true: {
        textAlign: "left",
      },
    },
    alignRight: {
      true: {
        textAlign: "right",
      },
    },
  },
});

const AuthorContainer = styled(Stack, {
  pb: "$4",
  justifyContent: "flex-start",
  "@initial": { justifyContent: "flex-start" },
  "@bp1": { justifyContent: "center" },
});
