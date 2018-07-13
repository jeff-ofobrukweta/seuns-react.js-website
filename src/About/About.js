import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Logo from '../images/landing.jpg';
import Desk from '../images/Data.png';
import City from '../images/city.png';
import Appanimate from '../Navbar/text';
import './About.css';

class About extends Component {
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
      <div className="About-parent-container">
        <div className="one">
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
                    {
                        // <img style={{width:'100%'}} src={Logo} alt="png"/>
                    }
                    </p>
            
            </div>
        </div>
        <div className="two-about">
         <p style={{textAlign:'center'}}>
            <section>
            <img src={Desk} alt="image-desktop" style={{position:'relative',width:'56px'}}/><br/>
            <h2>
               DATA MANAGEMENT, INFORMATION MANAGEMENT<br/>
               AND COMMUNICATIONS.
            </h2>
            <div style={{width: '50%',position: 'relative',left: '25%',marginTop:10,borderBottom:'3px solid red'}}></div>
            </section>
            <section style={{marginTop:'20px'}}>
            Application of developed data infrastructure,information<br/>
            management and communication to improve Human settlement and enviroment.
            Application of developed data infrastructure,information<br/>
            management and communication to improve Human settlement and enviroment.
            Application of developed data infrastructure,information<br/>
            management and communication to improve Human settlement and enviroment.
            </section>
         </p>
        </div>
        <div className="three-about">
                <p>
                <section>
                    <div class="card card-1"></div>
                </section>
                </p>
                 <p>
                <section>
                <div class="card card-1"></div>
                </section>
                </p>
                <p>
                <section>
                <div class="card card-1"></div>
                </section>
                </p>
        </div>
        <div className="four-about">
            <p style={{textAlign:'center'}}>
            <section>
            <img src={City} alt="image-desktop" style={{position:'relative',width:'56px'}}/><br/>
            <h2>
            HEALTH SETTLEMENT <br/>
            AND ENVIROMENT.
            </h2>
            <div style={{width: '50%',position: 'relative',left: '25%',marginTop:10,borderBottom:'3px solid red'}}></div>
            </section>
            <section style={{marginTop:'20px'}}>
            Application of developed data infrastructure,information<br/>
            management and communication to improve Human settlement and enviroment.
            Application of developed data infrastructure,information<br/>
            management and communication to improve Human settlement and enviroment.
            Application of developed data infrastructure,information<br/>
            management and communication to improve Human settlement and enviroment.
            </section>
        </p>
        </div>
        <div className="five-about">
            <p>
                <section>
                    <div class="card card-1"></div>
                </section>
            </p>
            <p>
                <section>
                <div class="card card-1"></div>
                </section>
            </p>
            <p>
                <section>
                <div class="card card-1"></div>
                </section>
            </p>
        </div>
        <div className="six-about">
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
            <div style={{width: '80%',position: 'relative',left: '10%',marginTop:10,borderBottom:'3px solid red'}}></div>
        </p>
        </div>
        <div className="seven-about">
            <p>
            <form>
            <span className="ten-hi">
                <header style={{margin: '11px 101px'}}>
                <h2>LEARN MORE</h2>
                <h3>Project</h3>
                <h3>Client</h3>
                </header>
            </span>
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
        <div className="eight-about">
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
    );
  }
}

export default About;