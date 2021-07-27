import Introduction from "components/Introduction";
import { getAllBlogposts } from "lib/blogposts";
import type { Blogpost } from "lib/blogposts";

interface HomeProps {
  blogposts: Array<Blogpost>;
}

export default function Home({ blogposts }: HomeProps) {
  return <Introduction blogposts={blogposts} />;
}

export async function getStaticProps() {
  const blogposts = getAllBlogposts();

  return {
    props: {
      blogposts,
    },
  };
}
