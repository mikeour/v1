import { styled } from "styles";
import { Stack } from "components/shared";

function Header({ frontmatter, hits }: { frontmatter: any; hits: number }) {
  return (
    <Wrapper type="column" gap={1}>
      <Stack type="row" gap={1}>
        <Date>{frontmatter.date}</Date>/<Date>{hits} views</Date>
      </Stack>

      <Headline>{frontmatter.headline}</Headline>

      <Description>{frontmatter.description}</Description>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled(Stack, {
  pb: "2rem",
  borderBottom: "1px solid $gray10",

  "@bp1": {
    borderBottom: "none",
  },
});

const Headline = styled("h1", {
  textAlign: "left",
  fontSize: "clamp($5, 5vw, $6)",
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
