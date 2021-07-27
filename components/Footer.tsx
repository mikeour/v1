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
  { id: 1, name: "Github" },
  { id: 2, name: "Twitter" },
  { id: 3, name: "LinkedIn" },
];

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer type="row" gap={6}>
        <NowPlayingContainer>
          <NowPlaying />
        </NowPlayingContainer>
        <Stack type="row" gap={6}>
          <Stack type="column" gap={2} css={{ alignSelf: "flex-start" }}>
            {links.map((link) => (
              <Link key={link.id} href={link.route}>
                <LinkText>{link.display}</LinkText>
              </Link>
            ))}
          </Stack>
          <Stack type="column" gap={2} css={{ alignSelf: "flex-start" }}>
            {externalLinks.map((link) => {
              return (
                <Stack key={link.id} type="row" gap={2}>
                  <p>{link.name}</p>
                  <ExternalIconContainer>
                    <ExternalLink />
                  </ExternalIconContainer>
                </Stack>
              );
            })}
          </Stack>
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

const ExternalIconContainer = styled(IconContainer, {
  size: 18,
  color: "$indigo8",
});
