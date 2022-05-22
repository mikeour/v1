import NextLink from "next/link";
import { IconContainer } from "components/shared";
import { Github, Twitter, LinkedIn } from "components/icons";
import { styled } from "styles";

const links = [
  {
    id: 1,
    route: "/",
    display: "Home",
  },
  { id: 2, route: "/blog", display: "Blog" },
  { id: 3, route: "/about", display: "About" },
  { id: 4, route: "/music", display: "Music" },
  { id: 5, route: "/movies", display: "Movies" },
];

const externalLinks = [
  {
    id: 1,
    name: "Github",
    url: "https://www.github.com/mikeour",
    Icon: Github,
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://www.twitter.com/mikeour",
    Icon: Twitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.co/in/michaelroeslein",
    Icon: LinkedIn,
  },
];

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LinkGrouping>
          {links.map((link) => (
            <Link key={link.id} href={link.route}>
              <LinkText>{link.display}</LinkText>
            </Link>
          ))}
        </LinkGrouping>

        <LinkGrouping css={{ gap: "$3" }}>
          {externalLinks.map((link) => {
            return (
              <ExternalLinkContainer
                key={link.id}
                as="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalIconContainer className="link-icon">
                  <link.Icon />
                </ExternalIconContainer>
              </ExternalLinkContainer>
            );
          })}
        </LinkGrouping>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled("footer", {
  bg: "$slate4",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const FooterContainer = styled("div", {
  p: "$4",
  width: "100%",
  maxWidth: "$footer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$3",
});

const LinkGrouping = styled("div", {
  display: "flex",
  gap: "$1",
});

const Link = styled(NextLink, {
  display: "grid",
  gridAutoFlow: "row",
  position: "relative",
});

const LinkText = styled("span", {
  cursor: "pointer",
  color: "$slate11",
  fontWeight: "bold",
  alignSelf: "center",

  "&:hover": { color: "$slate12" },
});

const ExternalLinkContainer = styled("div", {
  textDecoration: "none",
  width: "min-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$1",
  alignSelf: "center",
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

const ExternalIconContainer = styled(IconContainer, {
  size: 20,
  color: "inherit",
});
