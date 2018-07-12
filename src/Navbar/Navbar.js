import React, { Component } from 'react';
import Logo from '../images/landing.jpg';
import icecream from '../images/errorpage.png';
import Desk from '../images/Data.png';
import City from '../images/city.png';
import Chat from '../images/chat.png';
import Grid from '../Grid/Grid';
import Loader from '../Loader/Loader';
import Appanimate from './text';
import './Navbar.css';

class Navbar extends Component {
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
        <div id="wrapper">
        <div className="section-grid-1">
        <Loader/>
        <div className="Navbar">
                <div className="one">
                    <header>
                    <nav className="navigation">
                    <span className="navbar-toggle">
                    <i className="fa fa-bars fa-1x" style={{margin:'20px 30px'}}></i>
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
                    <div className="Nested">
                    <p className="first">
                        <div className="nested-A"> 
                            <h2 style={{fontSize: '32px',marginBottom:'34px'}}>
                            <b style={{fontWeight:1000}}><span>WE PROVIDE <span className="info" style={{color:'#e14800',fontWeight:1000,position:'relative'}}>INFORMATION</span></span><Appanimate className="Appanimate-inner"/></b><br/>
                            DESIGNED TO SUPPORT DEVELOPMENT</h2>
                        </div>
                        <div className="nested-A" id="orange" style={{borderBottom:'5px solid #e14800',width:'5%'}}>
                        </div>
                        <div className="nested-A">
                            <section style={{fontWeight:500,fontSize:21,wordSpacing:1}}>
                                Application of developed data infrastructure,information<br/>
                                management and communication to improve Human settlement and enviroment.
                            </section>
                        </div>
                    </p>
                        
                            <p className="second">
                                <img style={{width:'100%'}} src={Logo} alt="png"/>
                            </p>
                    
                    </div>
                </div>
                <div className="two">
                <p className="two-p">
                     <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={icecream} alt="png"/>
                </p>
                </div>
                <div className="three">
                    <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={icecream} alt="png"/>
                </div>
                <div className="four">
                    <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={icecream} alt="png"/>
                </div>
                <div className="five">
                    <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={icecream} alt="png"/>
                </div>
                <div className="six">
                    <p className="six-p">
                        <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={icecream} alt="png"/>
                    </p>
                </div>
                <div className="seven">
                    <p>
                    <section>
                    <h2>Application of developed data infrastructure,information<br/>
                    management and communication to improve Human settlement and enviroment.</h2>
                    </section>
                    <section style={{marginTop:'20px'}}>
                    Application of developed data infrastructure,information<br/>
                    management and communication to improve Human settlement and enviroment.
                    Application of developed data infrastructure,information<br/>
                    management and communication to improve Human settlement and enviroment.
                    </section>
                    </p>
                    <p>
                        <section>
                        <img src={Desk} alt="image-desktop" style={{position:'relative',width:'55'}}/><br/>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                        <section style={{marginTop:'20px'}}>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                    </p>
                </div> 
                
                <div className="eight">
                    <p>
                    <section>
                    </section>
                    </p>
                    <p>
                        <section>
                        <img src={City} alt="image-castle" style={{position:'relative',width:'55'}}/><br/>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                        <section style={{marginTop:'20px'}}>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                    </p>
                </div>
                <div className="nine">
                    <p>
                        <section style={{textAlign:'center'}}>
                        <h2 style={{fontWeight:700}}>GET THE FACTS RIGHT</h2>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.<br/>
                        <input type="submit" value="GET IN TOUCH" style={{color:'rgb(255, 255, 255)',margin:'10px 0px',
                            fontWeight: 700,
                            width: '150px',
                            height: '42px',
                            background:'rgb(225, 72, 0)',
                            outline: '0px',
                            border: '0px',
                            borderRadius: '4px'}}/>
                        </section>
                        
                    </p>
                </div>
                <div className="ten">
                    <p>
                    <form>
                    <header style={{margin: '11px 101px'}}>
                    <h2>LEARN MORE</h2>
                    <h3>Project</h3>
                    <h3>Client</h3>
                    </header>
                    <section style={{textAlign:'center'}}>
                        <input type="text" placeholder=" NAME" style={{width:'77%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#ccc',outline:0,borderRadius:'4px'}}/>
                        <input type="text" placeholder=" EMAIL" style={{width:'77%',height: 34,border:0,margin: '30px 0px',backgroundColor:'#ccc',outline:0,borderRadius:'4px'}}/>
                        <input type="text" placeholder=" SUBJECT" style={{width:'77%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#ccc',outline:0,borderRadius:'4px'}}/>
                    </section>
                    </form>
                    </p>
                    <p>
                    <form>
                    <header style={{margin:'11px 101px',textAlign:'right'}}>
                    <h2>LEARN MORE</h2>
                    <h3>Project</h3>
                    <h3>Client</h3>
                    </header>
                    <section className="textarea-section" style={{textAlign:'center'}}>
                        <textarea placeholder=" write a message here.." style={{width:'77%',height: '115px',outline:0,backgroundColor:'#ccc',border:0,borderRadius:'4px'}}/>
                    </section>
                    <section style={{textAlign:'center'}}>
                    {
                        <input type="submit" value="SUBMIT" style={{color:'#fff',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    }
                    </section>
                    </form>
                    </p>
                </div>
                <div className="eleven">
                    <p>
                        <section>
                        <img src={City} alt="image-castle" style={{position:'relative',width:'55'}}/><br/>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                        <section style={{marginTop:'20px'}}>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                    </p>
                    <p>
                        <section>
                        <img src={City} alt="image-castle" style={{position:'relative',width:'55'}}/><br/>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                        <section style={{marginTop:'20px'}}>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                    </p>
                    <p>
                        <section>
                        <img src={City} alt="image-castle" style={{position:'relative',width:'55'}}/><br/>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                        <section style={{marginTop:'20px'}}>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        </section>
                    </p>
                </div>
                
                
        </div>
        </div>
      </div>
    );
  }
}

export default Navbar;