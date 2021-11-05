import { styled, keyframes } from "styles";

const SVG = styled("svg", {});

export const Spotify = () => (
  <SVG
    viewBox="0 0 496 512"
    focusable="false"
    role="img"
    fill="#2FD566"
    xmlns="http://www.w3.org/2000/svg"
    css={{
      position: "relative",
      bg: "$slate6",
      br: "50%",
      zIndex: 4,
    }}
  >
    <path
      fill="#2FD566"
      d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
    ></path>
  </SVG>
);

export const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export const Github = () => (
  <svg
    viewBox="0 0 496 512"
    focusable="false"
    role="img"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: "var(--colors-accent)",
    }}
  >
    <path
      fill="currentColor"
      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
    />
  </svg>
);

export const Twitter = () => (
  <svg
    viewBox="0 0 512 512"
    focusable="false"
    role="img"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: "var(--colors-accent)",
    }}
  >
    <path
      fill="currentColor"
      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    />
  </svg>
);

export const LinkedIn = () => (
  <svg
    viewBox="0 0 448 512"
    focusable="false"
    role="img"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: "var(--colors-accent)",
    }}
  >
    <path
      fill="currentColor"
      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
    />
  </svg>
);

export const Mail = () => (
  <svg
    viewBox="0 0 20 20"
    focusable="false"
    role="img"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: "var(--colors-accent)",
    }}
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

export const ExternalLink = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M20 11a1 1 0 00-1 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h6a1 1 0 000-2H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-6a1 1 0 00-1-1z"></path>
    <path d="M16 5h1.58l-6.29 6.28a1 1 0 000 1.42 1 1 0 001.42 0L19 6.42V8a1 1 0 001 1 1 1 0 001-1V4a1 1 0 00-1-1h-4a1 1 0 000 2z"></path>
  </svg>
);

export const TimePlayed = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
    <path d="M13 7h-2v6h6v-2h-4z"></path>
  </svg>
);

export const Refresh = () => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M320 146s24.36-12-64-12a160 160 0 10160 160"
    ></path>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M256 58l80 80-80 80"
    ></path>
  </svg>
);

export const Play = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 48 48"
  >
    <path d="M16.75 8.41l24.42 12.7a3.25 3.25 0 010 5.77l-24.42 12.7A3.25 3.25 0 0112 36.7V11.3a3.25 3.25 0 014.55-2.98l.2.1z"></path>
  </svg>
);

export const Pause = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 48 48"
  >
    <path d="M17.75 7C19.55 7 21 8.46 21 10.25v27.5c0 1.8-1.46 3.25-3.25 3.25h-5.5A3.25 3.25 0 019 37.75v-27.5C9 8.45 10.46 7 12.25 7h5.5zm18 0C37.55 7 39 8.46 39 10.25v27.5c0 1.8-1.46 3.25-3.25 3.25h-5.5A3.25 3.25 0 0127 37.75v-27.5C27 8.45 28.46 7 30.25 7h5.5z"></path>
  </svg>
);

export function Letterboxd() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <path id="path-1" d="M0 0H129.847V141.389H0z"></path>
        <path id="path-3" d="M0 0H129.847V141.389H0z"></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <circle cx="250" cy="250" r="250" fill="#202830"></circle>
        <g transform="translate(61 180)">
          <g>
            <ellipse
              cx="189"
              cy="69.973"
              fill="#00E054"
              rx="70.079"
              ry="69.973"
            ></ellipse>
            <g transform="translate(248.153)">
              <mask id="mask-2" fill="#fff">
                <use xlinkHref="#path-1"></use>
              </mask>
              <ellipse
                cx="59.769"
                cy="69.973"
                fill="#40BCF4"
                mask="url(#mask-2)"
                rx="70.079"
                ry="69.973"
              ></ellipse>
            </g>
            <g>
              <mask id="mask-4" fill="#fff">
                <use xlinkHref="#path-3"></use>
              </mask>
              <ellipse
                cx="70.079"
                cy="69.973"
                fill="#FF8000"
                mask="url(#mask-4)"
                rx="70.079"
                ry="69.973"
              ></ellipse>
            </g>
            <path
              fill="#FFF"
              d="M129.54 107.022c-6.73-10.744-10.619-23.443-10.619-37.049 0-13.606 3.89-26.305 10.618-37.049 6.73 10.744 10.618 23.443 10.618 37.05 0 13.605-3.889 26.304-10.618 37.048zM248.46 32.924c6.73 10.744 10.619 23.443 10.619 37.05 0 13.605-3.89 26.304-10.618 37.048-6.73-10.744-10.618-23.443-10.618-37.049 0-13.606 3.889-26.305 10.618-37.049z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function NowPlayingIcon() {
  return (
    <NowPlayingContainer>
      <NowPlayingBar className="bar-1" />
      <NowPlayingBar className="bar-2" />
      <NowPlayingBar className="bar-3" />
    </NowPlayingContainer>
  );
}

const NowPlayingContainer = styled("div", {
  size: "1rem",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "1px",

  ".bar-1": {
    height: "60%",
  },

  ".bar-2": {
    height: "30%",
    animationDelay: "-2.2s",
  },

  ".bar-3": {
    height: "75%",
    animationDelay: "-3.7s",
  },
});

const UpAndDown = keyframes({
  "10%": { height: "30%" },
  "30%": { height: "100%" },
  "60%": { height: "50%" },
  "80%": { height: "75%" },
  "100%": { height: "60%" },
});

const NowPlayingBar = styled("span", {
  display: "inline-block",
  background: "$mediaGreen",
  flexBasis: "33%",
  height: "100%",
  animation: `${UpAndDown} 1.3s ease infinite alternate`,
});
