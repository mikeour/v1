import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export type Blogpost = {
  slug: string;
  title: string;
  image: string;
  headline: string;
  description: string;
  author: string;
  date: string;
  tags: Array<string>;
};

const blogpostDirectory = path.join(process.cwd(), "blogposts");

export async function getBlogpostBySlug(slug: string) {
  const filepath = path.join(blogpostDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(source);

  const mdxSource = await serialize(content);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = new Date(data.date).toLocaleDateString(
    "en-IN",
    options
  );

  const tags: string = data.tags;

  const frontmatter = {
    ...data,
    date: formattedDate,
    tags: tags
      .split(",")
      .map((entry) => entry.trim())
      .filter((entry) => entry),
  };

  const allBlogposts = getAllBlogposts();

  const indexOfCurrentBlogpost = allBlogposts
    .map((blogpost) => blogpost.slug)
    .indexOf(slug);

  const links = {
    prev: allBlogposts[indexOfCurrentBlogpost - 1] ?? null,
    next: allBlogposts[indexOfCurrentBlogpost + 1] ?? null,
  };

  return { mdxSource, frontmatter, links, content };
}

export function getAllBlogposts() {
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(blogpostDirectory);

  let allBlogposts = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(blogpostDirectory, filename);
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );

    const tags: string = data.tags;

    const frontmatter = {
      ...data,
      date: formattedDate,
      tags: tags
        .split(",")
        .map((entry) => entry.trim())
        .filter((entry) => entry),
    };

    return {
      slug,
      ...frontmatter,
    };
  });

  allBlogposts = allBlogposts.sort((firstPost, secondPost) => {
    const firstTime = new Date(firstPost.date).getTime();
    const secondTime = new Date(secondPost.date).getTime();

    return secondTime - firstTime;
  });

  return allBlogposts as Array<Blogpost>;
}
