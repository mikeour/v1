import { styled, keyframes } from "styles";

const rotateAndScale = keyframes({
  "0%": { transform: "rotate(0) scale(0.8)" },
  "50%": { transform: "rotate(180deg) scale(1.1)" },
  "100%": { transform: "rotate(360deg) scale(0.8)" },
});

const GradientContainer = styled("div", {
  size: "10rem",
  position: "absolute",
  zIndex: "-1",
  opacity: 0.4,
  transform: "translateX(-50%)",

  variants: {
    animate: {
      true: {
        animation: `${rotateAndScale} 3s infinite ease-in`,
      },
    },
  },
});

const GradientCircle = styled("div", {
  size: "10rem",
  filter: `blur(4rem)`,

  variants: {
    color: {
      yellow: {
        background: "$dreamy-gradients-yellow",
      },
      orange: {
        background: "$dreamy-gradients-orange",
      },
      green: {
        background: "$dreamy-gradients-green",
      },
      blue: {
        background: "$dreamy-gradients-blue",
      },
      purple: {
        background: "$dreamy-gradients-purple",
      },
    },
  },
});

interface DreamyGradientI {
  color: "yellow" | "orange" | "green" | "blue" | "purple";

  top?: string | "unset";
  bottom?: string | "unset";
  left?: string | "unset";
  right?: string | "unset";

  animate?: boolean;
}

const DreamyGradient: React.FC<DreamyGradientI> = ({
  top,
  bottom,
  left,
  right,
  color,
  animate,
}) => {
  return (
    <GradientContainer css={{ top, bottom, left, right }} animate={animate}>
      <GradientCircle color={`${color}`} />
    </GradientContainer>
  );
};

export default DreamyGradient;
