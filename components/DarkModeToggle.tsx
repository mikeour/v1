import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { styled } from "styles";

type ThemeType = "light" | "dark";

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

function DarkModeToggle() {
  const hasMounted = useHasMounted();
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }

  if (hasMounted === false) {
    return null;
  }

  return (
    <IconContainer onClick={toggleTheme}>
      <DarkModeIcon isDark={theme === "dark"} />
    </IconContainer>
  );
}

export default DarkModeToggle;

const IconContainer = styled("button", {
  display: "grid",
  placeContent: "center",
  br: "4px",
  size: "3rem",
  appearance: "none",
  outline: "none",
  border: 0,
  bg: "$slate2",
  cursor: "pointer",
  transition: "background 300ms ease-in-out",

  "&:hover": {
    bg: "$slate4",
  },

  "&:focus": {
    boxShadow: "0 0 0 3px $colors$slate8",
  },
});

const DarkModeIcon = styled("div", {
  $$size: "1.2rem",
  $$raySize: "calc($$size * -0.4)",
  $$offsetOrthogonal: "calc($$size * 0.65)",
  $$offsetDiagonal: "calc($$size * 0.45)",

  alignSelf: "center",
  size: "$$size",
  boxShadow: "inset calc($$size * 0.33) calc($$size * -0.25) 0",
  borderRadius: "999px",
  color: "$indigo8",
  transition: "all 500ms",

  variants: {
    isDark: {
      true: {
        transform: "scale(0.75)",
        color: "hsl(40, 100%, 50%)",
        boxShadow: `inset 0 0 0 $$size, 
          calc($$offsetOrthogonal * -1) 0 0 $$raySize, 
          $$offsetOrthogonal 0 0 $$raySize,
          0 calc($$offsetOrthogonal * -1) 0 $$raySize, 
          0 $$offsetOrthogonal 0 $$raySize, 
          calc($$offsetDiagonal * -1) calc($$offsetDiagonal * -1) 0   $$raySize, 
          $$offsetDiagonal $$offsetDiagonal 0 $$raySize, 
          calc($$offsetDiagonal * -1) $$offsetDiagonal 0   $$raySize, $$offsetDiagonal calc($$offsetDiagonal * -1) 0   $$raySize`,
      },
    },
  },
});

// const DarkModeIconTwo = otherStyled.div<{ isDark: boolean }>`
//   --size: 1.2rem;

// appearance: none;
// outline: none;
// cursor: pointer;
// align-self: center;
// width: var(--size);
// height: var(--size);
// box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
// border-radius: 999px;
// color: slateblue;
// transition: all 500ms;

//   ${(props) =>
//     props.isDark &&
//     css`
//       --ray-size: calc(var(--size) * -0.4);
//       --offset-orthogonal: calc(var(--size) * 0.65);
//       --offset-diagonal: calc(var(--size) * 0.45);

//       transform: scale(0.75);
//       color: hsl(40, 100%, 50%);
//       box-shadow: inset 0 0 0 var(--size),
//         calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
//         var(--offset-orthogonal) 0 0 var(--ray-size),
//         0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
//         0 var(--offset-orthogonal) 0 var(--ray-size),
//         calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0
//           var(--ray-size),
//         var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
//         calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0
//           var(--ray-size),
//         var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0
//           var(--ray-size);
//     `}
// `;
