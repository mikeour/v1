import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { styled } from "styles";
import syntaxStyle from "./syntaxStyle";

export default function CodeBlock({ className = "", children }: any) {
  const language = className.replace(/language-/, "");

  const formattedChildren = children.slice(0, children.length - 1);

  return (
    <Highlighter
      style={syntaxStyle}
      language={language}
      children={formattedChildren}
      // showLineNumbers={language !== "bash"}
      customStyle={{
        padding: "1rem",
        borderRadius: "8px",
        fontSize: "clamp(0.9rem, 1.75vw, 0.9rem)",
      }}
    />
  );
}

const Highlighter = styled(SyntaxHighlighter, {
  position: "relative",

  "&::after": {
    position: "absolute",
    content: "JSX",
    top: "0",
    right: "1rem",
    width: "auto",
    transform: "translateY(-100%)",
    padding: "0.2rem",
    color: "white",
    background: "inherit",
    textTransform: "uppercase",
    fontSize: "1.5rem",
    borderRadius: "5px",
  },
});
