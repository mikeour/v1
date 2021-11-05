import Page from "components/PageLayout";
import PageHeader from "components/PageHeader";
import Blogposts from "components/Blogposts";
import { getAllBlogposts } from "lib/blogposts";
import type { Blogpost } from "lib/blogposts";

interface BlogProps {
  blogposts: Array<Blogpost>;
}

export default function Blog({ blogposts }: BlogProps) {
  return (
    <Page title="Blog">
      <PageHeader>
        <h1>Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          aspernatur adipisci iusto dicta esse perferendis id, ipsa itaque rerum
          nemo, numquam veniam, quam distinctio amet qui! Repellendus quibusdam
          voluptatum expedita?
        </p>
      </PageHeader>

      <Blogposts blogposts={blogposts} />
    </Page>
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
