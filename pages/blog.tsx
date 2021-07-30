import Head from "next/head";
import { getAllBlogposts } from "lib/blogposts";
import type { Blogpost } from "lib/blogposts";
import { styled } from "styles";
import { Stack } from "components/shared";
import Blogposts from "components/Blogposts";

interface BlogProps {
  blogposts: Array<Blogpost>;
}

export default function Blog({ blogposts }: BlogProps) {
  return (
    <>
      <Head>
        <title key="title">Blog</title>
      </Head>
      <Stack type="column" gap={1} css={{ py: "$2" }}>
        <Stack type="column" gap={1} css={{ py: "$4" }}>
          <h1>Welcome to the blog.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur adipisci iusto dicta esse perferendis id, ipsa itaque
            rerum nemo, numquam veniam, quam distinctio amet qui! Repellendus
            quibusdam voluptatum expedita?
          </p>
        </Stack>

        <Blogposts blogposts={blogposts} />
      </Stack>
    </>
  );
}

export async function getStaticProps() {
  const blogposts = getAllBlogposts();

  return {
    props: {
      blogposts,
    },
  };
}
