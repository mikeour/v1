import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title key="title">Page Not Found</title>
      </Head>
      <h1 style={{ textAlign: "center" }}>Oh no, this is unexpected</h1>
      <p>Page not found</p>
    </>
  );
}
