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

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer
        type="row"
        gap={6}
        css={{
          "@initial": {
            gridAutoFlow: "column",
          },
          "@bp1": { gridAutoFlow: "row" },
        }}
      >
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
            <Stack type="row" gap={2}>
              {/* <IconContainer css={{ size: 20 }}>
              <Github />
            </IconContainer> */}
              <p>Github</p>
              <IconContainer css={{ size: 18, color: "$indigo8" }}>
                <ExternalLink />
              </IconContainer>
            </Stack>
            <Stack type="row" gap={2}>
              {/* <IconContainer css={{ size: 18 }}>
              <Twitter />
            </IconContainer> */}
              <p>Twitter</p>
              <IconContainer css={{ size: 18, color: "$indigo8" }}>
                <ExternalLink />
              </IconContainer>
            </Stack>
            <Stack type="row" gap={2}>
              <p>LinkedIn</p>
              <IconContainer css={{ size: 18, color: "$indigo8" }}>
                <ExternalLink />
              </IconContainer>
            </Stack>
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
  gridGap: "clamp($2, 7vw, $7) !important",
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
