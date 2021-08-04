import Page from "components/PageLayout";

export default function Custom404() {
  return (
    <Page title="Page Not Found">
      <h1 style={{ textAlign: "center" }}>Oh no, this is unexpected</h1>
      <p>Page not found</p>
    </Page>
  );
}
