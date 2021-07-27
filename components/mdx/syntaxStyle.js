export default {
  'code[class*="language-"]': {
    color: "#d6d9e0",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "red",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
    background: "#0e1729",
  },
  'pre[class*="language-"]::-moz-selection': {
    textShadow: "none",
    background: "#0e1729",
  },
  'pre[class*="language-"] ::-moz-selection': {
    textShadow: "none",
    background: "#0e1729",
  },
  'code[class*="language-"]::-moz-selection': {
    textShadow: "none",
    background: "#0e1729",
  },
  'code[class*="language-"] ::-moz-selection': {
    textShadow: "none",
    background: "#0e1729",
  },
  'pre[class*="language-"]::selection': {
    textShadow: "none",
    background: "#0e1729",
  },
  'pre[class*="language-"] ::selection': {
    textShadow: "none",
    background: "#0e1729",
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "#0e1729",
  },
  'code[class*="language-"] ::selection': {
    textShadow: "none",
    background: "#0e1729",
  },
  ':not(pre) > code[class*="language-"]': {
    color: "white",
    background: "#0e1729",
    padding: "0.1em",
    borderRadius: "0.3em",
    whiteSpace: "normal",
  },
  changed: {
    color: "red",
  },
  deleted: {
    color: "#EF535090",
  },
  inserted: {
    color: "#ADDB67",
  },
  comment: {
    color: "#6F7887",
  },
  string: {
    color: "#D6C294",
  },
  operator: {
    color: "#61AFEF",
  },
  selector: {
    color: "#D6C294",
  },
  doctype: {
    color: "#61AFEF",
  },
  url: {
    color: "#D6C294",
  },
  variable: {
    color: "#9AC181",
  },
  parameter: {
    color: "#9AC181",
  },
  number: {
    color: "#D19A66",
  },
  builtin: {
    color: "#CA90D0",
  },
  punctuation: {
    color: "#61AFEF",
  },
  "property-access": {
    color: "#7B86AE",
  },
  "attr-name": {
    color: "#CA90D0",
  },
  char: {
    color: "#9CC284",
  },
  constant: {
    color: "#56B6C2",
  },
  tag: {
    color: "#61AFEF",
  },
  "class-name": {
    color: "#56B6C2",
  },
  function: {
    color: "#CA90D0",
  },
  boolean: {
    color: "#5492C5",
  },
  property: {
    color: "#93A1D2",
  },
  // let, const, while, await, if, else, return, etc
  keyword: {
    color: "#61AFEF",
  },
  namespace: {
    color: "#9CC284",
  },

  important: {
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};
