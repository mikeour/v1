import { styled } from "styles";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled("article", {
  size: "100%",
});
