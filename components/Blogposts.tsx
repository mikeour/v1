import { styled } from "styles";
import { Stack, Link } from "components/shared";
import { handleTag } from "utils";
import type { Blogpost } from "lib/blogposts";

interface BlogpostsProps {
  blogposts: Array<Blogpost>;
  isFeatured?: boolean;
}

function Blogposts({ blogposts, isFeatured = false }: BlogpostsProps) {
  let posts = blogposts;

  if (isFeatured) {
    posts = blogposts.slice(0, 3);
  }

  return (
    <Stack type="column" gap={0} css={{ justifyContent: "stretch" }}>
      {posts.map((blogpost, index) => {
        const isFirstPost = index === 0;
        const showFeatured = isFeatured && isFirstPost;

        return (
          <BlogpostContainer key={blogpost.slug} type="row" gap={4}>
            <BlogpostInfo type="column" gap={1}>
              <Link href={`/blog/${blogpost.slug}`}>
                <Stack type="column" gap={0} css={{ color: "$gray12" }}>
                  {showFeatured && <FeaturedPost>Featured Post</FeaturedPost>}
                  <BlogHeadline isFeatured={showFeatured}>
                    {blogpost.headline}
                  </BlogHeadline>
                </Stack>
              </Link>

              <p>{blogpost.description}</p>
              <Link href={`/blog/${blogpost.slug}`} bold>
                Continue Reading
              </Link>
            </BlogpostInfo>

            <BlogpostSecondary type="column" gap={2}>
              <BlogpostDate>{blogpost.date}</BlogpostDate>

              <BlogpostTags type="column" gap={1}>
                {/* <TableOfContentsHeader>Tags</TableOfContentsHeader> */}
                {blogpost.tags.map((tag) => (
                  <Link key={tag} href={`/tag/${handleTag(tag)}`} bold>
                    {tag}
                  </Link>
                ))}
              </BlogpostTags>
            </BlogpostSecondary>
          </BlogpostContainer>
        );
      })}
    </Stack>
  );
}

export default Blogposts;

const BlogpostContainer = styled(Stack, {
  borderTop: "2px solid $slate6",
  py: "$4",
  gtc: "3fr 1fr",
  justifyContent: "stretch",
  "@bp1": {
    gridAutoFlow: "row !important",
    gtc: "1fr",
    gridGap: "$1 !important",
    py: "$4",
  },
});

const BlogpostSecondary = styled(Stack, {
  alignSelf: "flex-start",
  "@initial": { gridAutoFlow: "row" },
  "@bp1": { gridAutoFlow: "column", gtc: "1fr auto" },
});

const BlogpostDate = styled("p", {
  "@bp1": {
    alignSelf: "flex-start",
  },
});

const BlogpostTags = styled(Stack, {
  "@bp1": {
    display: "none",
  },
});

const BlogpostInfo = styled(Stack, {});

const TableOfContentsHeader = styled("p", {
  color: "$slate12",
  mb: "-0.5rem",
});

const FeaturedPost = styled("span", {
  textTransform: "uppercase",
  color: "$gray11",
  fontSize: "$2",
  letterSpacing: "1px",
});

const BlogHeadline = styled("h2", {
  variants: {
    isFeatured: {
      true: {
        // lineHeight: 1.4,
        fontSize: "$5",
      },
    },
  },
});
