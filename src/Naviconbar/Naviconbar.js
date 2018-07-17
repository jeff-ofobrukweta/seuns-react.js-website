import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import './Naviconbar.css';

class Naviconbar extends Component {
    constructor(props){
        super(props);
        this.state ={
            isToggleOn:true
        }
        this.handleClicktoogle = this.handleClicktoogle.bind(this);
    }

    handleClicktoogle=()=>{
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
    }
    render() {
        const classes = [];
          const burgerSign = [];
          if(this.state.isToggleOn==true){
            classes.push('display');
            burgerSign.push('fa fa-bars fa-1x');
          }else
          {
            classes.push('');
             burgerSign.push('fa fa-close fa-1x');
          }
    return (
            <div>
                <header>
                <nav className="navigation">
                <span className="navbar-toggle">
                <i className="fa fa-bars fa-1x" style={{margin:'20px 10px'}}></i>
                </span>
                <a href="#" className="logo"><input type="submit" value="Metroname" style={{height: '30px',width: '110px',border: '0px',outline:' none',color:'#ffffff',background: '#232323',fontWeight:700}}/></a>
                    <ul id="main-nav">
                        <li className={classes}><a className="nav-item">About Us</a></li>
                        <li className={classes}><a className="nav-item">Service</a></li>
                        <li className={classes}><a className="nav-item">Project</a></li>
                        <li><a className="nav-item">Contact Us</a></li>
                        <li><a className="nav-item">
                        <i className={burgerSign} onClick={this.handleClicktoogle}></i>
                        </a></li>
                    </ul>
                </nav>
                </header>
            </div>
           );
  }
}

export default Naviconbar;
