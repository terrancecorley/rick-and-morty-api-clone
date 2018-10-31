import React, { Component, Fragment } from 'react'
import Header from './Header';

export default class SiteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerMenuClicked: false,
    };

    this.navMenuClicked = this.navMenuClicked.bind(this);
  }

  navMenuClicked(e) {
    const navLinks = document.querySelector('#js-nav-links');
    navLinks.classList.toggle('hidden');

    this.setState({
      burgerMenuClicked: !this.state.burgerMenuClicked
    });
  }

  render() {
    return (
      <Header
        navMenuClicked={this.navMenuClicked}
        clicked={this.state.burgerMenuClicked}/>
    );
  };
}
