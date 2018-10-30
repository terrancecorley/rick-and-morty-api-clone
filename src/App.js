import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
