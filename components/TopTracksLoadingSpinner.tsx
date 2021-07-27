import { styled, keyframes } from "styles";

// credit to https://codepen.io/xavez/pen/YWVgWz?editors=1100

function LoadingSongs() {
  return (
    <Container>
      <LoadingSongsWrapper>
        <div style={{ animationDelay: "-1s" }}></div>
        <div style={{ animationDelay: "-.9s" }}></div>
        <div style={{ animationDelay: "-.8s" }}></div>
        <div style={{ animationDelay: "-.7s" }}></div>
        <div style={{ animationDelay: "-.6s" }}></div>
      </LoadingSongsWrapper>
    </Container>
  );
}

export default LoadingSongs;

const Container = styled("div", {
  width: "100%",
  height: "100%",
  minHeight: "70px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const stretch = keyframes({
  "0%, 20%, 49%": {
    transform: "scaleY(0.4)",
    background: "$indigo6",
  },
  "10%": { transform: "scaleY(1.0)" },
  "50%, 70%, 100%": {
    transform: "scaleY(0.4)",
    background: "$indigo8",
  },
  "60%": { transform: "scaleY(1.0)", background: "$indigo8" },
});

const LoadingSongsWrapper = styled("div", {
  margin: "auto",
  width: "22px",
  height: "30px",
  display: "flex",
  gap: "1px",

  div: {
    background: "$indigo6",
    height: "100%",
    width: "2px",
    animation: `${stretch} 2s infinite`,
    animationTimingFunction: "cubic-bezier(0.62, 0.28, 0.23, 0.99)",
  },
});
