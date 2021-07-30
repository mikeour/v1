export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export function getHeadings(source: string) {
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^##*\s/);
  });

  return headingLines.map((raw) => {
    const text = raw.replace(/^##*\s/, "");
    const level = raw.slice(0, 2) === "##" ? 2 : 1;
    const link = slugify(text);

    return { text, level, link };
  });
}

/**
 * Formats tag for url usage
 *
 * "Design Systems" ==> "design-systems"
 */

export function handleTag(tag: string) {
  return slugify(tag.toLowerCase());
}

export function getFormattedDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  return formattedDate;
}
