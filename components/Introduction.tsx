import { Stack, Link } from "components/shared";
import { styled } from "styles";

function Introduction() {
  return (
    <Stack
      type="column"
      gap={4}
      css={{
        justifyContent: "center",
        gridAutoRows: "auto",
      }}
    >
      <Stack type="column" gap={1} css={{ gtc: "1fr", py: "$4" }}>
        <Headline>
          Hey, I'm <br></br>
          <HeadlineEmphasized>Michael Roeslein</HeadlineEmphasized>
        </Headline>
        <p>I’m a design-focused web developer living in Brooklyn, NY.</p>
        <p>
          Whether it's sharing what{" "}
          <Link href="/music" bold>
            I'm listening to
          </Link>
          , what{" "}
          <Link href="/movies" bold>
            I'm watching
          </Link>
          , or{" "}
          <Link href="/blog" bold>
            writing about web development{" "}
          </Link>
          — I'm excited to have this little corner of the web to talk about all
          the things I love.
        </p>
      </Stack>
    </Stack>
  );
}

export default Introduction;

const Headline = styled("p", {
  fontSize: "clamp(3.1rem, 7vw, 5.5rem)",
  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: "1",
  color: "$slate12",
});

const HeadlineEmphasized = styled("span", {
  color: "$indigo8",
  display: "inline-block",
  "@supports (-webkit-background-clip: text) or (background-clip: text)": {
    background:
      "linear-gradient(to right, $indigo8, $indigo11, $indigo9, $indigo11, $indigo8)",
    backgroundClip: "text",
    color: "transparent",
  },
});
