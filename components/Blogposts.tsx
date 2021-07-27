import { styled } from "styles";
import { Stack } from "components/shared";
import Link from "next/link";
import type { Blogpost } from "lib/blogposts";

interface BlogpostsProps {
  blogposts: Array<Blogpost>;
}

function Blogposts({ blogposts }: BlogpostsProps) {
  return (
    <>
      {blogposts.reverse().map((blogpost) => {
        return (
          <BlogpostContainer key={blogpost.slug} type="row" gap={4}>
            <BlogpostSecondary type="column" gap={0}>
              <span style={{ fontWeight: "bold" }}>React</span>
              <p>{blogpost.date}</p>
            </BlogpostSecondary>

            <BlogpostInfo type="column" gap={1}>
              <h2>{blogpost.headline}</h2>
              <p>{blogpost.description}</p>
              <Link href={`/blog/${blogpost.slug}`}>
                <span>Continue Reading →</span>
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
  "@bp1": { gridAutoFlow: "row", gtc: "1fr" },
});

const BlogpostSecondary = styled(Stack, {
  alignSelf: "flex-start",
  "@initial": { gridAutoFlow: "row" },
  "@bp1": { gridAutoFlow: "column", gtc: "1fr auto" },
});

const BlogpostInfo = styled(Stack, {
  span: {
    color: "$indigo11",
    cursor: "pointer",
    "&:hover": { color: "$indigo12" },
  },
});
