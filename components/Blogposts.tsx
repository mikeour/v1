import { styled } from "styles";
import { Stack, Link } from "components/shared";
import { handleTag } from "utils";
import type { Blogpost } from "lib/blogposts";

interface BlogpostsProps {
  blogposts: Array<Blogpost>;
}

function Blogposts({ blogposts }: BlogpostsProps) {
  return (
    <>
      {blogposts.map((blogpost) => {
        return (
          <BlogpostContainer key={blogpost.slug} type="row" gap={4}>
            <BlogpostSecondary type="column" gap={2}>
              <BlogpostDate>{blogpost.date}</BlogpostDate>

              <BlogpostTags type="column" gap={1}>
                <TableOfContentsHeader>Tags</TableOfContentsHeader>
                {blogpost.tags.map((tag) => (
                  <Link key={tag} href={`/tag/${handleTag(tag)}`}>
                    {tag}
                  </Link>
                ))}
              </BlogpostTags>
            </BlogpostSecondary>

            <BlogpostInfo type="column" gap={1}>
              <h2>{blogpost.headline}</h2>
              <p>{blogpost.description}</p>
              <Link href={`/blog/${blogpost.slug}`} bold>
                Continue Reading →
              </Link>
            </BlogpostInfo>
          </BlogpostContainer>
        );
      })}
    </>
  );
}

export default Blogposts;

const BlogpostContainer = styled(Stack, {
  borderTop: "2px solid $slate6",
  py: "$4",
  gtc: "1fr 3fr",
  "@initial": { gridAutoFlow: "column", gtc: "1fr 3fr" },
  "@bp1": { gridAutoFlow: "row !important", gtc: "1fr" },
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
