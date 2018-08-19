import React, { Component } from 'react';
import  './Loader.css';

class Loader extends Component {
  render() {
    return (
       <div>
       <div id="fab"><a href="#form">
       <small>
        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
          <g>
            <path id="path1" transform="rotate(0,16,16) translate(0,3.99999928474422) scale(1.00000005960465,1.00000005960465)  " fill="#FFFFFF" d="M2,5.6294732L2,22 30.002,22 30.000366,5.6684031 15.998981,16.078965z M2,1.9999999L2,3.1330802 16.000934,13.584946 30.000118,3.1765466 29.999999,1.9999999z M2,0L29.999999,0C31.103,0,31.999999,0.89699984,31.999999,1.9999999L31.999999,22C31.999999,23.102999,31.103,24,29.999999,24L2,24C0.89700001,24,0,23.102999,0,22L0,1.9999999C0,0.89699984,0.89700001,0,2,0z" />
          </g>
        </svg>
      </small>
       </a></div>
       </div>
    );
  }
}

export default Loader;



