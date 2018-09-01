import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import './Naviconbar.css';

class Naviconbar extends Component {
    render() {
    return (
            <div>
                <div class="nav-div">
                <div class="nav-header">
                <div class="nav-title">
                    JoGeek
                </div>
                </div>
                <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                </div>
                <input type="checkbox" id="nav-check"/>
                <div class="nav-links">
                <a href="//github.io/jo_geek" target="_blank" className="a">Github</a>
                <a href="http://stackoverflow.com/users/4084003/" target="_blank" className="a">Stackoverflow</a>
                <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank" className="a">LinkedIn</a>
                <a href="https://codepen.io/jo_Geek/" target="_blank" className="a">Codepen</a>
                <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank" className="a">JsFiddle</a>
                </div>
            </div>
            </div>
           );
  }
}

export default Naviconbar;
