import Head from "next/head";
import NextLink from "next/link";
import { getAllBlogposts } from "lib/blogposts";
import type { Blogpost } from "lib/blogposts";
import { styled } from "styles";
import { Stack } from "components/shared";
import Blogposts from "components/Blogposts";

interface TagPageProps {
  blogposts: Array<Blogpost>;
  tag: string;
}

function TagPage({ blogposts, tag }: TagPageProps) {
  return (
    <>
      <Head>
        <title key="title">{tag} Posts</title>
      </Head>
      <Stack type="column" gap={1} css={{ py: "$2" }}>
        <Stack type="column" gap={1} css={{ py: "$4" }}>
          <h1>{tag}</h1>
          <p>Blogposts related to {tag}.</p>
        </Stack>

        <Blogposts blogposts={blogposts} />
      </Stack>
    </>
  );
}

export default TagPage;

export async function getStaticPaths() {
  const blogposts = getAllBlogposts();

  const tags = new Set<string>();

  for (const blogpost of blogposts) {
    for (const tag of blogpost.tags) {
      tags.add(tag);
    }
  }

  const paths = [...tags].map((tag: string) => {
    return {
      params: {
        tag: tag.toLowerCase(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const blogposts = getAllBlogposts();
  const blogpostsByTag = blogposts.filter((blogpost) =>
    blogpost.tags.some((tag) => tag.toLowerCase() === params.tag)
  );

  return {
    props: {
      tag: params.tag,
      blogposts: blogpostsByTag,
    },
  };
}

const Link = styled(NextLink, {
  color: "white",
  letterSpacing: "0.25px",
  fontSize: "1.1rem",
});
