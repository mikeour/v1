import Page from "components/PageLayout";
import PageHeader from "components/PageHeader";

export default function Custom404() {
  return (
    <Page title="Page Not Found">
      <PageHeader>
        <h1>Oh no, this is unexpected</h1>
        <p style={{ textAlign: "center" }}>Page not found</p>
      </PageHeader>
    </Page>
  );
}
