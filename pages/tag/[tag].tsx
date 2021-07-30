import Head from "next/head";
import { getAllBlogposts, getTagPathsFromBlogposts } from "lib/blogposts";
import type { Blogpost } from "lib/blogposts";
import { styled } from "styles";
import { Stack } from "components/shared";
import Blogposts from "components/Blogposts";
import { handleTag } from "utils";

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
  const paths = getTagPathsFromBlogposts(blogposts);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const allBlogposts = getAllBlogposts();

  const blogpostsContainingTag = allBlogposts.filter((blogpost) =>
    blogpost.tags.some((tag) => handleTag(tag) === params.tag)
  );

  const firstBlogpostContainingTag = blogpostsContainingTag.find((blogpost) =>
    blogpost.tags.find((tag) => handleTag(tag) === params.tag)
  );

  const tag = firstBlogpostContainingTag?.tags.find(
    (tag) => handleTag(tag) === params.tag
  );

  if (tag === undefined) throw new Error("Unable to find tag");

  return {
    props: {
      tag,
      blogposts: blogpostsContainingTag,
    },
  };
}
