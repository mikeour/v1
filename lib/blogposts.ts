import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const blogpostDirectory = path.join(process.cwd(), "blogposts");

export async function getFiles() {
  return fs.readdirSync(blogpostDirectory);
}

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

  const frontmatter = {
    ...data,
    date: formattedDate,
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

export type Blogpost = {
  slug: string;
  title: string;
  image: string;
  headline: string;
  description: string;
  author: string;
  date: string;
};

export function getAllBlogposts() {
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(blogpostDirectory);

  const allPostsData = fileNames.map((filename) => {
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

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug,
      ...frontmatter,
    };
  });

  return allPostsData as Array<Blogpost>;
}
