import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxStyle from "./syntaxStyle";

export default function CodeBlock({ className = "", children }: any) {
  const language = className.replace(/language-/, "");

  const formattedChildren = children.slice(0, children.length - 1);

  return (
    <SyntaxHighlighter
      style={syntaxStyle}
      language={language}
      customStyle={{
        padding: "1rem",
        borderRadius: "8px",
        fontSize: "clamp(0.9rem, 1.75vw, 0.9rem)",
      }}
    >
      {formattedChildren}
    </SyntaxHighlighter>
  );
}
