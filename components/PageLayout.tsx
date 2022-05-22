import { styled } from "styles";
import Head from "components/Head";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
// import DreamyGradient from "components/DreamyGradient";

interface SiteLayoutProps {
  title?: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
}

export default function PageLayout({
  children,
  title,
  description,
  image,
}: SiteLayoutProps) {
  return (
    <Wrapper>
      <Head title={title} description={description} image={image} />

      <Navigation />

      <Content>{children}</Content>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4 1.25rem",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  position: "relative",
});

const Content = styled("main", {
  size: "100%",
  color: "$gray12",
  px: "$3",
  maxWidth: "$content",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});
