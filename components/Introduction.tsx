import { Stack } from "components/shared";
import Blogposts from "components/Blogposts";
import { styled } from "styles";
import type { Blogpost } from "lib/blogposts";

interface IntroductionProps {
  blogposts: Array<Blogpost>;
}

function Introduction({ blogposts }: IntroductionProps) {
  return (
    <Stack
      type="column"
      gap={4}
      css={{
        justifyContent: "center",
        gridAutoRows: "auto",
        // padding: "0 1rem",
      }}
    >
      <Stack type="column" gap={1} css={{ gtc: "1fr", py: "$4" }}>
        <Headline>
          Hey, I'm <br></br>
          <HeadlineEmphasized>Michael Roeslein</HeadlineEmphasized>
        </Headline>
        <p>I’m a design-focused web developer living in Brooklyn, NY.</p>
      </Stack>

      <Blogposts blogposts={blogposts} />
    </Stack>
  );
}

export default Introduction;

const Headline = styled("p", {
  fontSize: "clamp(3.9rem, 7vw, 5.5rem)",
  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: "1",
  color: "$slate12",
});

const HeadlineEmphasized = styled("span", {
  color: "$indigo8",
  display: "inline-block",
  "@supports (-webkit-background-clip: text) or (background-clip: text)": {
    // background:
    //   "linear-gradient(90deg, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)",
    background:
      "linear-gradient(to right, $indigo8, $indigo11, $indigo9, $indigo11, $indigo8)",
    backgroundClip: "text",
    color: "transparent",
  },
});
