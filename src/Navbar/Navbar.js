import React, { Component } from 'react';
import Logo from '../images/chat.png';
import Desk from '../images/Data.png';
import City from '../images/city.png';
import Grid from '../Grid/Grid';
import Loader from '../Loader/Loader';
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
         burgerSign.push('fa fa-close fa-x');
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
                            <h2 style={{fontSize: '32px',lineHeight: '57px'}}><b>WE PROVIDE <span class="text-js" style={{color:'#e14800'}}>INFORMATION</span></b></h2> 
                            <h2 style={{fontSize: '32px'}}>DESIGNED TO SUPPORT DEVELOPMENT</h2>
                        </div>
                        <div className="nested-A" id="orange" style={{borderBottom:'5px solid #e14800',width:'5%'}}>
                        </div>
                        <div className="nested-A">
                            <section>
                                Application of developed data infrastructure,information<br/>
                                management and communication to improve Human settlement and enviroment.
                            </section>
                        </div>
                    </p>
                        {
                            // <p className="second">
                            // </p>
                    }
                    </div>
                </div>
                <div className="two">2</div>
                <div className="three">3</div>
                <div className="four">4</div>
                <div className="five">5</div>
                <div className="six">6</div>
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
                    <header style={{margin: '11px 101px'}}>
                    <h2>LEARN MORE</h2>
                    <h3>Project</h3>
                    <h3>Client</h3>
                    </header>
                    <section style={{textAlign:'center'}}>
                        <input type="text" placeholder=" NAME" style={{width:'65%',height: 34,border:0,margin: '11px 0px',backgroundColor:'#ccc',outline:0,borderRadius:'4px'}}/>
                        <input type="text" placeholder=" EMAIL" style={{width:'65%',height: 34,border:0,margin: '11px 0px',backgroundColor:'#ccc',outline:0,borderRadius:'4px'}}/>
                        <input type="text" placeholder=" SUBJECT" style={{width:'65%',height: 34,border:0,margin: '11px 0px',backgroundColor:'#ccc',outline:0,borderRadius:'4px'}}/>
                    </section>
                    </p>
                    <p>
                    <header style={{margin:'11px 101px',textAlign:'right'}}>
                    <h2>LEARN MORE</h2>
                    <h3>Project</h3>
                    <h3>Client</h3>
                    </header>
                    <section style={{textAlign:'center'}}>
                        <textarea placeholder=" write a message here.." style={{width:'65%',height: '205px',outline:0,backgroundColor:'#ccc',border:0,borderRadius:'4px'}}/>
                    </section>
                    <section style={{textAlign:'center'}}>
                        <input type="submit" value="SUBMIT" style={{color:'#fff',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    </section>
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