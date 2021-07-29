import Head from "next/head";
import { Stack } from "components/shared";
import { styled } from "styles";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title key="title">About</title>
      </Head>
      <Stack type="column" gap={1} css={{ py: "$2" }}>
        <Stack type="column" gap={1} css={{ py: "$4" }}>
          <h1>About.</h1>
          <p>
            Hi, my name's Michael and I'm a design-focused web developer based
            out of New York.
          </p>
        </Stack>
      </Stack>
    </>
  );
}
