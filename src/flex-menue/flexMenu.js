import React, { Component } from 'react';
import './flexMenu.css';

class flexMenu extends Component {

  render() {
    return (
      <div className="wrapper">
      <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Store</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
      </div>
    );
  }
}

export default flexMenu;
