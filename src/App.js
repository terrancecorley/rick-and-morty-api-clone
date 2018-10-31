import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './normalize.css';
import schwifty from './assets/fonts/schwifty.woff';
import schwifty2 from './assets/fonts/schwifty.woff2';
import schwifty3 from './assets/fonts/schwifty.ttf';
import SiteHeader from './components/SiteHeader';

const GlobalStyle = createGlobalStyle`
  // * Imports Styles
  @font-face {
    font-family: 'schwifty';
    src: 
      url(${schwifty2}) format('woff2'),
      url(${schwifty}) format('woff'),
      url(${schwifty3}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  // * General
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  :root {
    font-size: 1rem;

    // * Color Names
    --orange-peel: #FF9800;
    --shark-black: #202329;
    --mine-shaft: #333;
    --silver-chalice: #9E9E9E;
    --off-white: #FDFDFD;
    --white-sand: #F5F5F5;

    // * Colors
    --color--primary: var(--orange-peel);
    --color--secondary: var(--shark-black);
    --color--tertiary: var(--silver-chalice); 
    --bg-color--primary: var(--shark-black);
    --bg-color--secondary: var(--off-white);
    --bg-color-tertiary: var(--mine-shaft);

    // * Fonts
    --font-family--primary 'Open Sans', sans-serif;
    --font-family--secondary: 'schwifty', 'Open Sans', sans-serif;
  }

  body {
    line-height: 1.5;
    font-family: var(--font-family--primary);
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  // * Helper Classes
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .hidden {
    display: none;
  }

  // * Stateful Classes
  .is-hidden--mobile {
    display: none;
    @media (min-width: 30em) {
      display: block;
    }
  }

  .is-displayed--mobile {
    @media (min-width: 30em) {
      display: none;
    }
  }
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <SiteHeader />
      </Fragment>
    );
  }
}

export default App;
