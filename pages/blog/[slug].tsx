import Page from "components/PageLayout";
import BlogHeader from "components/BlogHeader";
import BlogLayout from "components/BlogLayout";
import components from "components/mdx";
import { Stack, Link } from "components/shared";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import useRegisterBlogHit from "hooks/useRegisterBlogHit";
import { getBlogpostBySlug, getAllBlogposts } from "lib/blogposts";
import { getHitsBySlug } from "lib/supabase";
import { getHeadings, handleTag } from "utils";
import { styled } from "styles";
import blogpostStyles from "styles/blogpost";

export default function Blogpost({ blogpost, slug, hits }: any) {
  const { mdxSource, frontmatter, links, content } = blogpost;
  const headings = getHeadings(content);

  useRegisterBlogHit(slug);

  return (
    <Page title={`${frontmatter.headline}`}>
      <BlogLayout>
        <BlogHeader frontmatter={frontmatter} hits={hits} />
        <ContentContainer>
          <Content className={blogpostStyles()}>
            <MDXRemote {...mdxSource} components={components} />
          </Content>

          <ContentSidebar>
            <AuthorContainer type="row" gap={2}>
              <AvatarContainer>
                <Avatar
                  src="/images/self.jpg"
                  alt="Picture of the author"
                  width={44}
                  height={44}
                  priority
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
                    <Link key={heading.text} href={`#${heading.link}`}>
                      {heading.text}
                    </Link>
                  );
                })}
              </Stack>
              <Stack type="column" gap={2}>
                <TableOfContentsHeader>Tags</TableOfContentsHeader>
                {frontmatter.tags.map((tag: string) => {
                  return (
                    <Link key={tag} href={`/tag/${handleTag(tag)}`}>
                      {tag}
                    </Link>
                  );
                })}
              </Stack>
            </StickyContent>
          </ContentSidebar>
        </ContentContainer>

        <ExtraLinksContainer type="row" gap={4}>
          <ExtraLink type="column" gap={1}>
            {links.prev !== null && (
              <>
                <p>Previous</p>
                <h2>{links.prev.headline}</h2>
                <p>{links.prev.description}</p>
                <Link href={`/blog/${links.prev.slug}`} bold>
                  ← Continue Reading
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
                <Link href={`/blog/${links.next.slug}`} bold>
                  Continue Reading →
                </Link>
              </>
            )}
          </ExtraLink>
        </ExtraLinksContainer>
      </BlogLayout>
    </Page>
  );
}

export async function getStaticPaths() {
  const blogposts = getAllBlogposts();

  const paths = blogposts.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const blogpost = await getBlogpostBySlug(params.slug);
  const hits = await getHitsBySlug(params.slug);

  return {
    props: { blogpost, slug: params.slug, hits },
    revalidate: 10,
  };
}

const ContentContainer = styled("div", {
  display: "grid",
  gtc: "2.5fr 1fr",
  gridGap: "3rem",
  position: "relative",
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

const TableOfContentsHeader = styled("span", {
  textTransform: "uppercase",
  color: "$gray10",
  fontSize: "$2",
  letterSpacing: "1px",
});

const TableOfContentsLink = styled("span", {
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
