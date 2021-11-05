import { css } from "styles";

export default css({
  "*": {
    minWidth: "0",
  },

  li: {
    listStyle: "inside",
    ml: "$2",
  },

  h2: {
    fontSize: "clamp($4, 5vw, $5)",
    mt: "$3",
  },

  h3: {
    fontSize: "clamp($3, 5vw, $4)",
    mt: "$3",
  },

  "code:not([class])": {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    overflowWrap: "normal",
    padding: "0.2rem 0.4rem",
    fontSize: "$1",
    letterSpacing: "0.15px",
    background: "$indigo10",
    color: "#fff",
    br: "4px",
  },
});
