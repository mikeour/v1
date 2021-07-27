import { styled } from "styles";
import NowPlaying from "components/NowPlaying";
import { IconContainer, Stack } from "components/shared";
import {
  Github,
  Twitter,
  LinkedIn,
  Mail,
  ExternalLink,
} from "components/icons";
import NextLink from "next/link";

const links = [
  {
    id: 1,
    route: "/",
    display: "Home",
  },
  { id: 2, route: "/blog", display: "Blog" },
  { id: 3, route: "/about", display: "About" },
  { id: 4, route: "/contact", display: "Contact" },
];

const funLinks = [
  {
    id: 1,
    route: "/toptracks",
    display: "Top Tracks",
  },
];

const externalLinks = [
  { id: 1, name: "Github", url: "https://www.github.com/mikeour" },
  { id: 2, name: "Twitter", url: "https://www.twitter.com/mikeour" },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.co/in/michaelroeslein",
  },
];

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer type="row" gap={6}>
        <NowPlayingContainer>
          <NowPlaying />
        </NowPlayingContainer>
        <Stack type="row" gap={6}>
          <LinksContainer type="column" gap={2}>
            {links.map((link) => (
              <Link key={link.id} href={link.route}>
                <LinkText>{link.display}</LinkText>
              </Link>
            ))}
          </LinksContainer>
          <LinksContainer type="column" gap={2}>
            {externalLinks.map((link) => {
              return (
                <ExternalLinkContainer
                  key={link.id}
                  type="row"
                  gap={2}
                  as="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkText>{link.name}</ExternalLinkText>
                  <ExternalIconContainer className="link-icon">
                    <ExternalLink />
                  </ExternalIconContainer>
                </ExternalLinkContainer>
              );
            })}
          </LinksContainer>
        </Stack>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled("footer", {
  gridArea: "foot",
  bg: "$slate4",
  width: "100%",
  display: "grid",
  placeContent: "center",
  gtc: "minmax(0, 1fr)",
});

const FooterContainer = styled(Stack, {
  p: "$4",
  padding: "2rem 1rem",
  margin: "0 auto",
  width: "100%",
  maxWidth: "$footer",
  placeContent: "center",
  // TODO: Fix specificity of these
  gridGap: "clamp($2, 7vw, $7) !important",
  gridAutoFlow: "column",
  "@initial": {
    gridAutoFlow: "column",
  },
  "@bp1": { gridAutoFlow: "row !important" },
});

const NowPlayingContainer = styled("div", {
  width: "300px",
  display: "grid",
  placeContent: "center",
  gtc: "minmax(0, 1fr)",
});

const LinksContainer = styled(Stack, {
  alignSelf: "flex-start",
});

const Link = styled(NextLink, {
  display: "grid",
  gridAutoFlow: "row",
  position: "relative",
});

const LinkText = styled("p", {
  cursor: "pointer",
  color: "$slate11",

  "&:hover": { color: "$slate12" },
});

const ExternalLinkContainer = styled(Stack, {
  textDecoration: "none",
  width: "min-content",
  cursor: "pointer",
  color: "$slate11",
  ".link-icon": {
    color: "$indigo9",
  },
  "&:hover": {
    color: "$slate12",
    ".link-icon": {
      color: "$indigo10",
    },
  },
});

const ExternalLinkText = styled("p", {
  color: "inherit",
});

const ExternalIconContainer = styled(IconContainer, {
  size: 18,
  color: "inherit",
});
