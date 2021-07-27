import { global } from "styles";

export default global({
  "*, :before, :after": {
    p: 0,
    m: 0,
    boxSizing: "border-box",
  },

  "html, body": {
    height: "100%",
  },

  html: {
    // scrollBehavior: "smooth",
    scrollPaddingTop: "2rem",
  },

  body: {
    maxWidth: "100vw",
    fontSize: "18px",
    overscrollBehavior: "none",
    fontFamily: "$karla",
    bg: "$slate2",
    color: "$gray12",
  },

  "p, ol, li": {
    color: "$slate11",
    lineHeight: 1.75,
  },

  "a, a:visited": {
    color: "$indigo10",
    textDecorationColor: "$indigo10",
    textDecorationThickness: ".075em",
    textUnderlineOffset: ".09em",
    transition: "all 300ms ease",
  },

  "a:focus": {
    color: "$indigo11",
    outline: "2px solid $indigo11",
    outlineOffset: "2px",
  },

  "a:hover": { color: "$indigo12" },

  "a:hover,a:active": { outline: "0" },

  "a:link": { transition: "color 300ms ease" },

  "a:not([class])": {
    WebkitTextDecorationSkip: "ink",
    textDecorationSkip: "ink",
  },

  code: {
    fontFamily: "$code",
  },
});
