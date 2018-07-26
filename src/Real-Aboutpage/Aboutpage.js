import React, { Component } from 'react';
import Naviconbar from '../Naviconbar/Naviconbar';
import Loader from '../Loader/Loader';
import  './Aboutpage.css';

class Aboutpage extends Component {
  render() {
    return (
       <div className="Navbar-realabout">
            <Loader/>
            <div className="realabout-one-parent">
            <Naviconbar/>
            <div className="realabout-one">
                <p>
                <div className="nested-A"> 
                    <h2 style={{fontSize: '32px',fontWeight:'bold',lineHeight: 'calc(100%)'}}>RYTHM, CONTINUITY, CONSISTENCY</h2>
                </div>
                <div className="nested-A" id="orange" style={{borderBottom:'2px solid #e14800',width:'50%',margin:'20px 25%'}}></div>
                <section>
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment.
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment.
                </section>
                </p>
            </div>
            </div>

            <div className="realabout-two">
                <p>
                <h2 style={{fontSize: '28px',fontWeight:'bold'}}>SOLUTION FOCUSED THINKING</h2>
                <div className="nested-A" id="orange" style={{borderBottom:'5px solid #e14800',width:'6%',margin:'20px 94%'}}></div>
                <section>
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment.
                <br/>
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment. 
                </section>
                </p>
            </div>
            <div className="realabout-three">
                <p>
                <h2 style={{fontSize: '28px',fontWeight:'bold'}}>SOLUTION FOCUSED THINKING</h2>
                <div className="nested-A" id="orange" style={{borderBottom:'5px solid #e14800',width:'6%',margin:'20px 0px'}}></div>
                <section>
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment.
                <br/>
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment. 
                </section>
                </p>
            </div>
            <div className="realabout-four">
                <p>
                <h2 style={{fontSize: '28px',fontWeight:'bold'}}>SOLUTION FOCUSED THINKING</h2>
                <div className="nested-A" id="orange" style={{borderBottom:'5px solid #e14800',width:'6%',margin:'20px 94%'}}></div>
                <section>
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment.
                <br/>
                Application of developed data infrastructure,information<br/>
                management and communication to improve Human settlement and enviroment. 
                </section>
                </p>
            </div>
            <div className="realabout-five">
                <p>
                <section style={{textAlign:'center'}}>
                <h2 style={{fontWeight:700,fontSize:'30px',marginBottom:'22px'}}>TOGETHER FOR BETTER</h2>
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
                <div style={{width: '80%',position: 'relative',left: '10%',marginTop:10,borderBottom:'3px solid #e14800'}}></div>
            </p>
            </div>
            <div className="realabout-six">
            <p>
            <span className="ten-hi" style={{textAlign: 'left'}}>
                     <header style={{margin: '11px 20%'}}>
                        <h2>ABOUT US</h2><br/>
                        About Metronome<br/>
                        Work Process
                    </header>
                </span>
                <section style={{textAlign:'center'}}>
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
               <section style={{textAlign:'center'}}>
               <section className="textarea-section" style={{textAlign:'center'}}>
               <textarea placeholder=" write a message here.." style={{width:'60%',padding: '0px 2%',height: '115px',outline:0,backgroundColor:'#ccc',border:0,borderRadius:'4px'}}/>
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
            <div className="realabout-seven">
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

export default Aboutpage;