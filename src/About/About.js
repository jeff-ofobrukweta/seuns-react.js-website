import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Logo from '../images/landing.jpg';
import Desk from '../images/Data.png';
import City from '../images/city.png';
import Logolanding from '../images/icecream.jpg';
import Appanimate from '../Navbar/text';
import Loader from '../Loader/Loader';
import Naviconbar from '../Naviconbar/Naviconbar';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About-parent-container">
      <Loader/>
        <div className="one-about">
            <Naviconbar/>
            <div className="Nested-about">
            <p className="first-about">
                <div className="nested-A"> 
                    <h2 style={{fontSize: '32px',fontWeight:'bold'}}>SOLUTION FOCUSED THINKING</h2>
                </div>
                <div className="nested-A" id="orange" style={{width: '50%',position: 'relative',left: '25%',marginTop:30,marginBottom:30,borderBottom:'2px solid #e14800'}}></div>
                <div className="nested-A">
                    <section style={{fontWeight:500,fontSize:21,wordSpacing:1}}>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                    </section>
                </div>
            </p>
            </div>
        </div>
        <div className="two-about">
         <p style={{textAlign:'center',marginTop:'40px'}}>
            <section>
            <img src={Desk} alt="image-desktop" style={{position:'relative',width:'50px'}} className="icon-animate"/><br/>
            <h2>
               DATA MANAGEMENT, INFORMATION MANAGEMENT<br/>
               AND COMMUNICATIONS.
            </h2>
            <div style={{width: '50%',position: 'relative',left: '25%',marginTop:10,borderBottom:'2px solid red'}}></div>
            </section>
            <section style={{marginTop:'20px'}}>
            Application of developed data infrastructure,information<br/>
            management and communication to improve Human settlement and enviroment.
            Application of developed data infrastructure,information<br/>
            </section>
         </p>
        </div>
        <div className="three-about" style={{textAlign:'center'}}>
                <p>
                <section>
                    <div class="card card-1">
                    <section style={{
                        height:'30%',
                        borderTopLeftRadius:'7px',
                        borderTopRightRadius:'7px',
                        fontSize: '16px',
                        textAlign: 'center',
                        padding: '10px 0px',
                        background: '#666',
                        fontWeight:'bold',
                        color:'#fff'
                        }}>
                        <img src={City} alt="image-desktop" style={{position:'relative',width:'46px'}}  className="icon-animate"/><br/>
                    Advanced geographic information<br/>analysis & spartial Enablements</section>
                    <section style={{margin:'20px'}}>
                    Application of developed data infrastructure,information<br/>
                    management and communication to improve Human settlement and enviroment.
                    Application of developed data infrastructure,information<br/>
                    </section>
                    </div>
                        </section>
                        </p>
                        <p>
                        <section>
                        <div class="card card-1">
                        <section style={{
                            height:'30%',
                            borderTopLeftRadius:'7px',
                            borderTopRightRadius:'7px',
                            fontSize: '16px',
                            textAlign: 'center',
                            padding: '10px 0px',
                            background: '#666',
                            fontWeight:'bold',
                            color:'#fff'
                            }}>
                            <img src={City} alt="image-desktop" style={{position:'relative',width:'46px'}}  className="icon-animate"/><br/>
                        Real Time Analysis &<br/>Projections</section>
                        <section style={{margin:'20px'}}>
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        </section>
                </div>
                </section>
                </p>
                <p>
                <section>
                <div class="card card-1">
                <section style={{
                    height:'30%',
                    borderTopLeftRadius:'7px',
                    borderTopRightRadius:'7px',
                    fontSize: '16px',
                    textAlign: 'center',
                    padding: '10px 0px',
                    background: '#666',
                    fontWeight:'bold',
                    color:'#fff'
                    }}>
                    <img src={City} alt="image-desktop" style={{position:'relative',width:'46px'}}  className="icon-animate"/><br/>
                    Geospatial Web Services &<br/>Use case Applications</section>
                    <section style={{margin:'20px'}}>
                    Application of developed data infrastructure,information<br/>
                    management and communication to improve Human settlement and enviroment.
                    Application of developed data infrastructure,information<br/>
                    </section>
                </div>
                </section>
                </p>
        </div>
        <div className="four-about">
            <p style={{textAlign:'center',marginTop:'40px'}}>
            <section>
            <img src={City} alt="image-desktop" style={{position:'relative',width:'50px'}}  className="icon-animate"/><br/>
            <h2>
            HEALTH SETTLEMENT <br/>
            AND ENVIROMENT.
            </h2>
            <div style={{width: '50%',position: 'relative',left: '25%',marginTop:10,borderBottom:'2px solid red'}}></div>
            </section>
            <section style={{marginTop:'20px'}}>
            Application of developed data infrastructure,information<br/>
            management and communication to improve Human settlement and enviroment.
            Application of developed data infrastructure,information<br/>
            </section>
        </p>
        </div>
        <div className="five-about" style={{textAlign:'center'}}>
            <p>
                <section>
                    <div class="card card-1">
                    <section style={{
                    height:'30%',
                    borderTopLeftRadius:'7px',
                    borderTopRightRadius:'7px',
                    fontSize: '16px',
                    textAlign: 'center',
                    padding: '10px 0px',
                    background: '#666',
                    fontWeight:'bold',
                    color:'#fff'
                    }}>
                    <img src={City} alt="image-desktop" style={{position:'relative',width:'46px'}}  className="icon-animate"/><br/>
                    Comprehensive &<br/>Strategic Planning</section>
                    <section style={{margin:'20px'}}>
                    Application of developed data infrastructure,information<br/>
                    management and communication to improve Human settlement and enviroment.
                    Application of developed data infrastructure,information<br/>
                    management and communication to improve Human settlement and enviroment.
                    </section>
                    </div>
                </section>
            </p>
            <p>
                <section>
                <div class="card card-1">
                <section style={{
                    height:'30%',
                    borderTopLeftRadius:'7px',
                    borderTopRightRadius:'7px',
                    fontSize: '16px',
                    textAlign: 'center',
                    padding: '10px 0px',
                    background: '#666',
                    fontWeight:'bold',
                    color:'#fff'
                    }}>
                    <img src={City} alt="image-desktop" style={{position:'relative',width:'46px'}}  className="icon-animate"/><br/>
                Design &<br/>Enviromental Stewarship</section>
                <section style={{margin:'20px'}}>
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment.
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment.
                </section>
                </div>
                </section>
            </p>
            <p>
                <section>
                <div class="card card-1">
                <section style={{
                    height:'30%',
                    borderTopLeftRadius:'7px',
                    borderTopRightRadius:'7px',
                    fontSize: '16px',
                    textAlign: 'center',
                    padding: '10px 0px',
                    background: '#666',
                    fontWeight:'bold',
                    color:'#fff'
                    }}>
                    <img src={City} alt="image-desktop" style={{position:'relative',width:'46px'}}  className="icon-animate"/><br/>
                Transportation and<br/>Land Use</section>
                <section style={{margin:'20px'}}>
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment.
                Application of developed data infrastructure,information
                </section>
                </div>
                </section>
            </p>
        </div>
        <div className="six-about">
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
                        <div style={{width: '80%',position: 'relative',left: '10%',marginTop:10,borderBottom:'2px solid red'}}></div>
        </p>
        </div>
        <div className="seven-about">
            <p>
            <span className="ten-hi" style={{textAlign: 'left'}}>
                    <header style={{margin: '11px 20%'}}>
                        <h2>ABOUT US</h2><br/>
                        About Metronome<br/>
                        Work Process
                    </header>
                </span>
                <section style={{textAlign:'center'}}>
                    <input type="text" placeholder=" NAME" style={{width:'60%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#ccc',outline:0,borderRadius:'4px'}}/>
                    <input type="text" placeholder=" EMAIL" style={{width:'60%',height: 34,border:0,margin: '30px 0px',backgroundColor:'#ccc',outline:0,borderRadius:'4px'}}/>
                    <input type="text" placeholder=" SUBJECT" style={{width:'60%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#ccc',outline:0,borderRadius:'4px'}}/>
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
               <section style={{textAlign:'center'}}>
               <section className="textarea-section" style={{textAlign:'center'}}>
               <textarea placeholder=" write a message here.." style={{width:'60%',height: '115px',outline:0,backgroundColor:'#ccc',border:0,borderRadius:'4px'}}/>
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
        <div className="eight-about" style={{padding:'20px'}}>
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
    );
  }
}

export default About;