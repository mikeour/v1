import { styled } from "styles";
import { Stack } from "components/shared";

function Header({ frontmatter }: { frontmatter: any }) {
  return (
    <Wrapper type="column" gap={1}>
      <Date>{frontmatter.date}</Date>
      <Headline>{frontmatter.headline}</Headline>
      <Description>{frontmatter.description}</Description>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled(Stack, {
  // margin: "1.5rem auto",
  // width: "90%",
  justifyContent: "center",
  pb: "2rem",
  borderBottom: "1px solid $gray10",
});

const Headline = styled("h1", {
  textAlign: "left",
  fontSize: "clamp($4, 5vw, $6)",
});

const Description = styled("p", {
  fontSize: "$",
  textAlign: "left",
  color: "$slate11",
});

const Date = styled("span", {
  textAlign: "left",
  whiteSpace: "nowrap",
  color: "$slate11",
});
