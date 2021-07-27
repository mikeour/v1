import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  p, div, a, h1, h2, h3, h4, h5, h6, li {
    font-family: 'Source Sans Pro', sans-serif;
  }

  html {
    min-width: 360px;
    scroll-behavior: smooth;
  }

  body {
    background: var(--colors-background);
    transition: background 0.3s ease-in-out;
    overscroll-behavior-x: none;
    overscroll-behavior-y: none;
  }

  :root {
    --colors-dark: hsl(0 0% 5%);
    --colors-background: #ffffff;
    --colors-primary: hsl(0 0% 5%);
    --colors-secondary: hsl(0 0% 45%);
    --colors-accent: rgba(106,90,205,1);
    --colors-accent-light: #f2f1fb;
    --colors-now-playing: var(--colors-accent-light)
  }

  /* :root[data-theme='light'] {
    --colors-background: #ffffff;
    --colors-primary: hsl(0 0% 5%);
    --colors-secondary: hsl(0 0% 45%);
    --colors-accent: rgba(106,90,205,1);
    --colors-accent-light: #f2f1fb;
    --colors-now-playing: var(--colors-accent-light)
  } */

  :root[data-theme='dark'] {
    --colors-background: #2E3539;
    --colors-primary: hsl(0 0% 95%);
    --colors-secondary: hsl(0 0% 65%);
    --colors-accent: hsl(40,100%,50%);
    --colors-accent-light: #ffebc4;
    --colors-now-playing: var(--colors-accent-light)
  }


  h1 {
    font-weight: 200;
    font-size: clamp(2rem, 3.25vw, 3rem);
    letter-spacing: 0px;
    color: var(--colors-accent);
    line-height: 1.1;
  }

    p,
    ol,
    li {
      letter-spacing: 0.5px;
    }

    strong {
      font-weight: 400;
    }

    p,
    li,
    a {
      font-size: clamp(1.15rem, 1.75vw, 1.25rem);
      font-weight: 200;
      line-height: 1.2;
      text-align: left;
    }

    a {
      color: var(--colors-accent);
      text-decoration: none;
      font-weight: 400;
    }


    li {
    }

    img {
      max-width: 100%;
    }




 

 
`;

/*
 h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  h1,
  h2,
  h3 {
    font-weight: lighter;
    letter-spacing: 0.25px;
  }

  h1 {
    font-size: clamp(3rem, 5vmin, 4rem);
    letter-spacing: 1px;
    color: var(--colors-accent);
    margin: 0.5rem auto;
  }

  h2 {
    font-size: clamp(2rem, 4vmin, 3rem);
    
  }

  h3 {
    font-size: clamp(1.5rem, 3vmin, 2rem);
    margin: 0 0 2rem 0;
  }

   h4 {
    font-size: clamp(1rem);
  }
*/
