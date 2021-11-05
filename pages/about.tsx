import Page from "components/PageLayout";
import PageHeader from "components/PageHeader";

export default function AboutPage() {
  return (
    <Page title="About">
      <PageHeader>
        <h1>About</h1>
        <p>
          Hi, my name's Michael and I'm a design-focused web developer based out
          of New York.
        </p>
      </PageHeader>
    </Page>
  );
}
