import Page from "components/PageLayout";
import PageHeader from "components/PageHeader";
import Blogposts from "components/Blogposts";
import type { Blogpost } from "lib/blogposts";
import { getAllBlogposts, getTagPathsFromBlogposts } from "lib/blogposts";
import { handleTag } from "utils";
interface TagPageProps {
  blogposts: Array<Blogpost>;
  tag: string;
}

function TagPage({ blogposts, tag }: TagPageProps) {
  return (
    <Page title={`${tag} Posts`}>
      <PageHeader>
        <h1>{tag}</h1>
        <p>Blogposts related to {tag}.</p>
      </PageHeader>

      <Blogposts blogposts={blogposts} />
    </Page>
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
