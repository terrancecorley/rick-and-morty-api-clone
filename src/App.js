import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import schwifty from './assets/fonts/schwifty.woff';
import schwifty2 from './assets/fonts/schwifty.woff2';
import schwifty3 from './assets/fonts/schwifty.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'schwifty';
    src: 
      url(${schwifty2}) format('woff2'),
      url(${schwifty}) format('woff'),
      url(${schwifty3}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  :root {
    box-sizing: border-box;
    font-size: 1rem;

    --color--primary: ;
    --color--secondary ;
    --bg-color--primary ;
    --bg-color--secondary ;
    --font-family--primary 'Open Sans', sans-serif;
    --font-family--secondary: 'schwifty', 'Open Sans', sans-serif;
  }

  body {
    line-height: 1.5;
  }
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
