import { styled } from "styles";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <Wrapper>
      <Navigation />

      <Content>{children}</Content>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateAreas: '"nav nav nav" ". content ." "foot foot foot"',
  gtr: "auto 1fr auto",
  gtc: "auto 1fr auto",
  gridGap: "4rem 2rem",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  position: "relative",
});

const Content = styled("main", {
  gridArea: "content",
  size: "100%",
  color: "$gray12",
  display: "grid",
  justifySelf: "center",
  placeItems: "center",
  placeContent: "center",
  maxWidth: "$content",
});
