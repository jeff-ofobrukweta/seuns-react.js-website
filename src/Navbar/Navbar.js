import React, { Component } from 'react';
import Logo from '../images/landing.jpg';
import icecream from '../images/hallway.jpg';
import Desk from '../images/Data.png';
import City from '../images/city.png';
import Chat from '../images/chat.png';
import Grid from '../Grid/Grid';
import Loader from '../Loader/Loader';
import Appanimate from './text';
import sketch from '../images/sketch.jpg';
import Navbaricon from '../Naviconbar/Naviconbar';
import './Navbar.css';
import Naviconbar from '../Naviconbar/Naviconbar';

class Navbar extends Component {
  render() {
    return (
        <div id="wrapper">
        <div className="section-grid-1">
        <Loader/>
        <div className="Navbar">
                <div className="one">
                    <Naviconbar/>
                    <div className="Nested">
                    <p className="first" style={{position: 'relative',margin: '15% 3.5%'}}>
                        <div className="nested-A"> 
                            <h2 style={{fontSize: '32px',marginBottom:'34px'}}>
                            <b style={{fontWeight:1000}}><span>WE  PROVIDE <span className="info" style={{color:'#e14800',fontWeight:1000,position:'relative',fontWeight:'bold'}}>INFORMATION</span></span><Appanimate className="Appanimate-inner"/></b><br/>
                            DESIGNED TO SUPPORT DEVELOPMENT</h2>
                        </div>
                        <div className="nested-A" id="orange" style={{borderBottom:'5px solid #e14800',width:'5%'}}>
                        </div>
                        <div className="nested-A">
                            <section style={{fontWeight:500,fontSize:21,wordSpacing:1,marginTop:'23px'}}>
                                Application of developed data infrastructure,information<br/>
                                management and communication to improve Human settlement and enviroment.
                            </section>
                        </div>
                    </p>
                        
                            <p className="second">   
                            <img style={{width:'100%'}} src={Logo} alt="png" className="logo-landing"/>
                            </p>
                    
                    </div>
                </div>
                <div className="parent-container-two-six">
                <div className="two">
                <div>
                    <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={icecream} alt="png"/>
                </div>
                </div>
                <div className="three">
                    <div>
                    <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={sketch} alt="png"/>
                    </div>
                </div>
                <div className="four">
                    <div>
                    <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={icecream} alt="png"/>
                    </div>
                </div>
                <div className="five">
                    <div>
                    <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={icecream} alt="png"/>
                    </div>
                </div>
                <div className="six">
                    <div>
                    <img style={{width:'100%',height:'434.88px',objectFit:"cover"}} src={sketch} alt="png"/>
                    </div>
                </div>
                </div>
                <div className="seven">
                    <p>
                    <section>
                    <h2 style={{fontSize:'30px',fontWeight:'700'}}>OUR SERVICES</h2>
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
                        <img src={Desk} alt="image-desktop" style={{position:'relative',width:'50px'}}/><br/>
                        <h2 style={{fontWeight:'700'}}>Data Management, Information management<br/>and communication</h2>
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
                        <img src={City} alt="image-castle" style={{position:'relative',width:'50px'}}/><br/>
                        <h2 style={{fontWeight:'700'}}>Human Settlement and Enviroment</h2>
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
                        <h2 style={{fontWeight:700,fontSize:'30px',marginBottom:'22px'}}>GET THE FACTS RIGHT</h2>
                        <section style={{fontSize:'16px',letterSpacing:'3px'}}>
                        Lets create a world where data drives<br/>
                        development.<br/>
                        </section>
                        <input type="submit" value="GET IN TOUCH" style={{color:'rgb(255, 255, 255)',margin:'10px 0px',
                            fontWeight: 700,
                            fontSize:'18px',
                            width: '150px',
                            height: '42px',
                            background:'rgb(225, 72, 0)',
                            outline: '0px',
                            border: '0px',
                            borderRadius: '4px'}}/>
                        </section>
                        <div style={{width: '80%',position: 'relative',left: '10%',marginTop:10,borderBottom:'3px solid red'}}></div>
                    </p>
                </div>
                <div className="ten">
                        <p>
                        <span className="ten-hi"  style={{textAlign: 'left'}}>
                            <header style={{margin: '11px 20%'}}>
                                <section>
                                    <h2>LEARN MORE</h2><br/>
                                    Project<br/>
                                    Client
                                </section>
                            </header>
                        </span>
                        <section style={{textAlign:'center',margin:'25px 0px'}}>
                            <input type="text" placeholder=" NAME" style={{width:'60%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#ccc',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
                            <input type="text" placeholder=" EMAIL" style={{width:'60%',height: 34,border:0,margin: '30px 0px',backgroundColor:'#ccc',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
                            <input type="text" placeholder=" SUBJECT" style={{width:'60%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#ccc',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
                        </section>
                    </p>
                    <p>
                    <label>
                    <form>
                    <span className="ten-hi" style={{textAlign: 'right'}}>
                        <header style={{margin: '11px 20%'}}>
                        <h2>ABOUT US</h2><br/>
                            About Metronome<br/>
                            Work Process
                        </header>
                    </span>
                    <section style={{textAlign:'center',margin:'25px 0px'}}>
                    <section className="textarea-section" style={{textAlign:'center'}}>
                    <textarea placeholder=" write a message here.." style={{width:'60%',height:'115px',padding:'0px 2%',outline:0,backgroundColor:'#ccc',border:0,borderRadius:'4px'}}/>
                </section>
                        <section style={{textAlign:'center'}}>
                        {
                            <input type="submit" value="SUBMIT" style={{color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                        }
                        </section>
                    </section>
                    </form>
                    </label>
                    </p>
                </div>
                <div className="eleven">
                    <p>
                        <section>
                        <a href="#" className="logo" style={{marginLeft:'0rem'}}><input type="submit" value="Metroname" style={{height: '30px',width: '110px',border: '0px',outline:' none',color:'#ffffff',background: '#232323',fontWeight:700,marginBottom:'10%'}}/></a>
                        <h2>LAGOS</h2>
                        </section>
                        <section style={{marginTop:'20px',fontSize:'15px'}}>
                        2nd Floor,Kresta Laurel Building,<br/>
                        376,Ikorodu Road.Maryland,<br/>
                        Lagos,Nigeria.
                        </section>
                    </p>
                    <p>
                        <section>
                        <a href="#" className="logo" style={{marginLeft:'0rem'}}><input type="submit" value="Metroname" style={{height: '30px',opacity: 0,width: '110px',border: '0px',outline:' none',color:'#ffffff',background: '#232323',fontWeight:700,marginBottom:'10%'}}/></a>
                        <h2>ABUJA</h2>
                        </section>
                        <section style={{marginTop:'20px',fontSize:'15px'}}>
                        Plot 41,Algiers street,street suit 301<br/>
                        Copper House,Wuse Zone 5,<br/>
                        Abuja FCT,900285, Nigeria.
                        </section>
                    </p>
                    <p>
                        <section>
                        <a href="#" className="logo" style={{marginLeft:'0rem'}}><input type="submit" value="Metroname" style={{height:'30px',opacity: 0,width: '110px',border: '0px',outline:' none',color:'#ffffff',background: '#232323',fontWeight:700,marginBottom:'10%'}}/></a>
                        <h2>MOBILE</h2>
                        </section>
                        <section style={{marginTop:'20px',fontSize:'15px'}}>
                        +234 8186998661<br/>
                        +234 8107313133
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