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
    return line.match(/^##\s/);
  });

  return headingLines.map((raw) => {
    const text = raw.replace(/^##\s/, "");
    const link = slugify(text);

    return { text, link };
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

export function getFormattedDate(date: number | string): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  return formattedDate;
}

export function millisToMinutesAndSeconds(millis: number) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds;
}

export function getPlaceholderItems(amount: number) {
  return Array.from({ length: amount }).map((_, index) => index);
}
