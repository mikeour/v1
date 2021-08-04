import NextHead from "next/head";

const defaultOgImage = "https://mikeour.io/images/og-image.png";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

function Head({
  title = "Paco Coursey",
  description = "Hi, I'm Paco. Frontend developer and designer.",
  image = defaultOgImage,
  children,
}: HeadProps) {
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://mikeour.io" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mikeour" />
      <meta name="apple-mobile-web-app-title" content="Michael" />
      <meta name="author" content="Michael Roeslein" />

      {children}
    </NextHead>
  );
}

export default Head;
