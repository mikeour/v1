import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <h1>Oh no, this is unexpected</h1>
      <p>Page not found</p>
    </>
  );
}
