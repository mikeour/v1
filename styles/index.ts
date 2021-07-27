import { createCss } from "@stitches/react";
import {
  gray,
  grayDark,
  indigo,
  indigoDark,
  slate,
  slateDark,
  blackA,
  whiteA,
} from "@radix-ui/colors";

export const { styled, getCssString, theme, global, keyframes, css } =
  createCss({
    theme: {
      fonts: {
        karla: "Karla, sans-serif",
        code: "Source Code Pro, monospace",
      },
      colors: {
        ...gray,
        ...indigo,
        ...slate,
        ...blackA,
        ...whiteA,
      },
      sizes: {
        header: "1100px",
        content: "900px",
        footer: "1100px",
      },
      space: {
        1: "0.75rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "4rem",
        6: "6rem",
        7: "8rem",
        8: "10rem",
      },
      fontSizes: {
        1: "0.85rem",
        2: "1rem",
        3: "1.25rem",
        4: "1.6rem",
        5: "2.1rem",
        6: "3rem",
      },
    },
    media: {
      bp1: "(max-width: 820px)",
      bp2: "(max-width: 1440px)",
    },
    utils: {
      // Abbreviated margin properties
      m: (config) => (value) => ({
        margin: value,
      }),
      mt: (config) => (value) => ({
        marginTop: value,
      }),
      mr: (config) => (value) => ({
        marginRight: value,
      }),
      mb: (config) => (value) => ({
        marginBottom: value,
      }),
      ml: (config) => (value) => ({
        marginLeft: value,
      }),
      mx: (config) => (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (config) => (value) => ({
        marginTop: value,
        marginBottom: value,
      }),

      // Abbreviated padding properties
      p: (config) => (value) => ({
        padding: value,
      }),
      pt: (config) => (value) => ({
        paddingTop: value,
      }),
      pr: (config) => (value) => ({
        paddingRight: value,
      }),
      pb: (config) => (value) => ({
        paddingBottom: value,
      }),
      pl: (config) => (value) => ({
        paddingLeft: value,
      }),
      px: (config) => (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (config) => (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      // A property for applying width/height together
      size: (config) => (value) => ({
        width: value,
        height: value,
      }),

      bg: (config) => (value) => ({
        background: value,
      }),

      gtr: (config) => (value) => ({
        gridTemplateRows: value,
      }),

      gtc: (config) => (value) => ({
        gridTemplateColumns: value,
      }),

      // A property to apply linear gradient
      linearGradient: (config) => (value) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      // An abbreviated property for border-radius
      br: (config) => (value) => ({
        borderRadius: value,
      }),
    },
  });

export const darkTheme = theme("dark-theme", {
  colors: {
    ...grayDark,
    ...indigoDark,
    ...slateDark,
  },
});
