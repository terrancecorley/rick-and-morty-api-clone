import React, { Fragment } from 'react'
import styled from 'styled-components';

export default function SiteHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Documentation</a></li>
        </ul>
      </nav>
    </header>
  );
}
