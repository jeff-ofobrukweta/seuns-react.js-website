import React, { Component } from 'react';
import Smallnavbar from '../Naviconbar/Naviconbar';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './flexMenu.css';

class flexMenu extends Component {
  constructor(props){
    super(props);
    this.state ={
      toogledisplay:null,
    }
}
static propTypes = {
  match:propTypes.object.isRequired,
  location:propTypes.object.isRequired,
  history:propTypes.object.isRequired,
}
componentDidMount(){
  console.log(this.props.history);
}

  handleMenuToogle=()=>{
  const hamburgerElement = document.getElementById("ul");
  const menuToogle = document.getElementById("menu-toogle-1-id");
  const hamburger = document.getElementById("2")
  menuToogle.classList.toggle("toggle-active");
  hamburger.classList.toggle("hambuger-active");
  hamburgerElement.classList.toggle("nav-active");

  hamburgerElement.addEventListener('click', (event)=>{
    event.preventDefault();
    if(event.target.classList.contains("idle-li"))
    {
      const activeLink = event.target;
      activeLink.classList.add('active-link');
      hamburgerElement.style.marginLeft = '21.2%';
      const allLink = hamburgerElement.children;
    
    for (let index = 0; index < allLink.length; index++) {
      const element = allLink[index].firstChild;
      if (!element.classList.contains('active-link')) {
        allLink[index].className ="display-none"; 
      }
    }
  }
   
  })
  hamburgerElement.style.marginLeft = '-13%';
  const allLink1 = hamburgerElement.children;
  for (let index = 0; index < allLink1.length; index++) {
    const element = allLink1[index].firstChild;
    if (element.classList.contains('active-link')) {
     element.classList.remove("active-link")
    }else{
      allLink1[index].className ="neutralizer";
    }
  }
}
handleroute=(e)=>{
  e.preventDefault();
    const trueLink = String(e.target.getAttribute("href"));
    this.setState({toogledisplay:trueLink})
    const EncodeUrl = encodeURIComponent(1)+"="+encodeURIComponent(trueLink);
    const queryString = EncodeUrl;
    this.props.history.push({
      pathname:`${trueLink}`,
      search:'?'+queryString
    })
}
  render() {
    const {match,location,history}=this.props;
    return (
        <div>
            <header className="header-nav" id="header">
                <div className="logo"><input type="submit" value="Metronome" style={{height: '2vmax',width: '9vmax',border: '0px',outline:' none',color:'#ffffff',background: '#232323',fontWeight:700,fontSize: '1.2vmax'}}/></div>
                <nav id="nav" className="nav">
                  <ul id="ul" className="idle-ul">
                    <li id="li"><a  className="idle-li" id="a" href="/about" onClick={this.handleroute}>ABOUT US</a></li>
                    <li id="li" ><a  className="idle-li" id="a" href="/services" onClick={this.handleroute}>SERVICES</a></li>
                    <li id="li"><a  className="idle-li" id="a" href="/work" onClick={this.handleroute}>PROJECTS</a></li>
                    <li id="li" ><a className="idle-li" id="a" href="/" onClick={this.handleroute}>HOME</a></li>
                  </ul>
                  <span className="menu-toogle-1" data-reactid='1' id="menu-toogle-1-id" onClick={this.handleMenuToogle}>
                    <i className="hamburger-bars"  id="2"></i>
                  </span>
                </nav>    
            </header>
        </div>
    );
  }
}
const wrapWithrouter = withRouter(flexMenu)

export default wrapWithrouter;
 