import React, { Component } from 'react';
import icecream from '../images/hallway.jpg';
import Desk from '../images/Data.png';
import City from '../images/city.png';
import Chat from '../images/chat.png';
import Grid from '../Grid/Grid';
import Loader from '../Loader/Loader';
import Appanimate from './text';
import sketch from '../images/sketch.jpg';
import Naviconbar from '../flex-menue/flexMenu';
import Messagebox from '../Grid/Grid';
import Data from '../images/Group 6.png';
import Information from '../images/Group 7.png';
import Knowledge from '../images/Group 8.png';
import Wisdom from '../images/Group 9.png';
import axios from 'axios';
import './Navbar.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            error:'',
            flashmessageIdentifier:'',
            emailSentmessage:'',
        }
        this.handleChangeemail = this.handleChangeEmail.bind(this);
        this.handlesubmitlogin = this.handleSubmitlogin.bind(this);

    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
        console.log(">>>>>>>"+this.state.email);
    }

    handleSubmitlogin = async (event)=>{
        event.preventDefault();
        const flash = [];
        console.log(this.state.email);
        const data={
            email:this.state.email
        }
        await axios.post(`http://localhost:1337/findonethroughEmail`,data)
        .then((response)=> {
              if(response.status===200 && response.data.id!==null){
                //   this.setState({info:})
                  let messageTosendEmail = `Email has been sent,please await our response(s)`;
                  this.setState({emailSentmessage:messageTosendEmail});
                  flash.push('elementToFadeInAndOut');
                  this.setState({email:'',flashmessageIdentifier:flash});
                  this.props.history.push("/");
                  setTimeout(()=>{
                    flash.push('display-none');
                   this.props.history.push('/work');
                   this.props.history.push('/');
                  },10000);
              }
              else
              {
                this.props.history.replace("/");
              }     
        })
        .catch((error)=>{
        //   this.setState({error:true});
          console.log(error);
        });
      }
  render() {
    const {email,emailSentmessage,flashmessageIdentifier} = this.state;
    return (
        <div id="wrapper">
        <div className="section-grid-1">
        <Loader/>
        <div className="Navbar">
                <div className="one">
                    <div className="Nested">
                    <Naviconbar/>
                    <p className="first" style={{position: 'relative',margin: '-13.86% 6%'}}>
                        <div className="nested-A"> 
                            <h2 style={{fontSize: '30px',marginBottom:'34px',transform: 'scale(1.04)'}}>
                            <b style={{fontWeight:1000}}><span className="text-write-parent"><b>WE  PROVIDE </b><span className="info"><b style={{color:'#e14800',fontWeight:1000,fontWeight:'bold'}} className="text-write"></b></span></span></b>
                            <br/>
                            <br/>
                            <article className="support" style={{lineHeight:'30px',fontSize: '30px'}}>TO SUPPORT DEVELOPMENT AND FOSTER</article>
                            <article className="sustainability" style={{fontSize: '30px'}}>ENVIROMENTAL SUSTAINABILITY.</article>
                            </h2>
                        </div>
                        <div className="nested-A" id="orange" style={{borderBottom:'2.5px solid #f8cbad',width:'55%',transform: 'scale(1.04)',position: 'relative'
                        ,right: '0.5%'}}>
                        </div>
                        <div className="nested-A">
                            <section style={{fontWeight:500,fontSize:19,wordSpacing:1,marginTop:'23px',transform: 'scale(1.04)'}}>
                                <b>Application of developed data infrastructure,information<br/>
                                management and communication to improve Human<br/> settlement and enviroment.</b>
                            </section>
                        </div>
                    </p>
                        
                            <p className="second">   

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
                    <div style={{width: '96%',marginTop:30,borderBottom:'2px solid #f8cbad'}} className="horizontal"></div>
                    <section style={{marginTop:'20px'}} className="horizontal-second-index">
                    Application of developed data infrastructure,information<br/>
                    management and communication to improve Human settlement and enviroment.
                    Application of developed data infrastructure,information<br/>
                    management and communication to improve Human settlement and enviroment.
                    </section>
                    </p>
                    <p>
                        <section>
                        <img src={Desk} alt="image-desktop" style={{position:'relative',width:'50px'}}/><br/>
                        <h2 style={{fontWeight:'700'}}>Data Management, Information management<br/>and communications</h2>
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
                        <section style={{marginTop:'20px',marginBottom: '15px'}}>
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
                        <section className="main-flex-container">
                        <div className="flex-container-1">
                            <img src={Data} href="Data" className="image"/>
                            <div className="flex-item"><b>Data</b></div>
                        </div>
                        <div className="flex-container-1">
                            <img src={Information} href="Information" className="image"/>
                            <div className="flex-item"><b>Information</b></div>
                        </div>
                        <div className="flex-container-1">
                            <img src={Knowledge} href="Knowledge" className="image"/>
                            <div className="flex-item"><b>Knowledge</b></div>
                        </div>
                        <div className="flex-container-1">
                            <img src={Wisdom} href="Wisdom" className="image"/>
                            <div className="flex-item"><b>Wisdom</b></div>
                        </div>
                    </section>
                    <div className="nested-A" id="orange" style={{borderBottom:'2px solid #e14800',width:'30%',margin: '13px 35%'}}></div>
                        <section style={{fontSize:'16px',letterSpacing:'0px'}}>
                        <b>
                            Lets create a world where data drives
                            development.management and communication to improve <br/>
                            Human settlement and enviroment.
                            Application of developed data infrastructure,information<br/>
                        </b>
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
                    </p>
                </div>
                <div className="ten">
                        <p>
                        <label>
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
                        </label>
                    </p>
                    <form onSubmit={this.handleSubmitlogin}>
                    <p>
                    <label>
                    <span className="ten-hi" style={{textAlign: 'right'}}>
                        <header style={{margin: '11px 20%'}}>
                        <h2>ABOUT US</h2><br/>
                            About Metronome<br/>
                            Work Process
                        </header>
                    </span>
                    <section style={{textAlign:'center',margin:'25px 0px'}}  id="form">
                    <Messagebox name={emailSentmessage} classidentifier={flashmessageIdentifier}/>
                    <section className="textarea-section" style={{textAlign:'center'}}>
                    <textarea placeholder=" write a message here.." onChange={this.handleChangeemail}
                     value={email}
                     style={{width:'60%',height:'115px',padding:'0px 2%',outline:0,backgroundColor:'#ccc',border:0,borderRadius:'4px'}}/>
                </section>
                        <section style={{textAlign:'center'}}>
                        {
                            <input type="submit" value="SUBMIT" style={{color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                        }
                        </section>
                    </section>
                    </label>
                    </p>
                    </form>
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