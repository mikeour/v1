import Page from "components/PageLayout";
import { styled } from "styles";

export default function Custom404() {
  return (
    <Page title="Page Not Found">
      <InfoContainer>
        <h1>Oh no</h1>
        <p>Page not found</p>
      </InfoContainer>
    </Page>
  );
}

const InfoContainer = styled("div", {
  height: "100%",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
