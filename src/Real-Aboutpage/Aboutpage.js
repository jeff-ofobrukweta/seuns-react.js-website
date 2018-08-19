import React, { Component } from 'react';
import Naviconbar from '../flex-menue/flexMenu';
import Loader from '../Loader/Loader';
import Landing from '../images/Asset.svg';
import Data from '../images/Group 6.png';
import Information from '../images/Group 7.png';
import Knowledge from '../images/Group 8.png';
import Wisdom from '../images/Group 9.png';
import Messagebox from '../Grid/Grid';
import axios from 'axios';
import  './Aboutpage.css';

class Aboutpage extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            error:'',
            flashmessageIdentifier:'',
            emailSentmessage:''
        }
        this.handleChangeemail = this.handleChangeemail.bind(this);
        this.handlesubmitlogin = this.handleSubmitlogin.bind(this);
    }
    handleChangeemail(event) {
        this.setState({email: event.target.value});
        console.log(">>>>>>>"+this.state.email);
    }
    handleSubmitlogin = async (event)=>{
        event.preventDefault();
        const flash = [];
        const data={
            email:this.state.email
        }
        await axios.post(`http://localhost:1337/findonethroughEmail`,data)
        .then((response)=> {
            console.log(">>>>>>>",JSON.stringify(data,null,2));
            console.log(">>>>>>>",JSON.stringify(response,null,2));
              if(response.status===200 && response.data.id!==null){
                //   this.setState({info:})
                  let messageTosendEmail = `Email has been sent,please await our response(s)`;
                  this.setState({emailSentmessage:messageTosendEmail});
                  console.log('----------------email--'+this.state.emailSentmessage);
                  console.log("_____",JSON.stringify(response.data));
                  flash.push('elementToFadeInAndOut');
                  this.setState({email:'',flashmessageIdentifier:flash});
                  this.props.history.push("/about");
                  setTimeout(()=>{
                    flash.push('display-none');
                   this.props.history.push('/');
                   this.props.history.push('/about');
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
       <div className="Navbar-realabout">
            <Loader/>
            <div className="realabout-one-parent">
            <Naviconbar/>
            <div className="realabout-one">
                <p>
                <div className="nested-A"> 
                    <h2 style={{fontSize: '32px',fontWeight:'bold',lineHeight: 'calc(100%)'}}><b>RHYTHM, CONTINUITY, CONSISTENCY</b></h2>
                </div>
                <div className="nested-A" id="orange" style={{borderBottom:'2px solid #f8cbad',width:'40%',margin:'23px 30%'}}></div>
                <section>
                <b>
                management and communication to improve Human settlement and enviroment.<br/>
                Application of developed data,data infrastructure,information Application<br/>
                Application of developed data infrastructure,information,information<br/>
                management and communication.
                </b>
                </section>
                <div>
                </div>
                <div className="push-image">

                </div>
                </p>
            </div>
            </div>

            <div className="realabout-two">
                <p>
                <h2 style={{fontSize: '28px',fontWeight:'bold'}}>SOLUTION FOCUSED THINKING</h2>
                <div className="nested-A" id="orange" style={{borderBottom:'4px solid #f8cbad',width:'33%',margin:'20px 67%'}}></div>
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
                <div className="nested-A" id="orange" style={{borderBottom:'4px solid #f8cbad',width:'33%',margin:'20px 0px'}}></div>
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
                <div className="nested-A" id="orange" style={{borderBottom:'4px solid #f8cbad',width:'33%',margin:'20px 67%'}}></div>
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
                <section className="main-flex-container">
                        <div className="flex-container-1">
                            <img src={Data} href="Data" className="image"/>
                            <div className="flex-item"><b id="mobile">Data</b></div>
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
                <div className="nested-A" id="orange" style={{borderBottom:'2px solid #f8cbad',width:'30%',margin: '13px 35%'}}></div>
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
               <section style={{textAlign:'center'}}>
               <Messagebox name={emailSentmessage} classidentifier={flashmessageIdentifier}/>
               <section className="textarea-section" style={{textAlign:'center'}}  id="form">
               <textarea placeholder=" write a message here.."  onChange={this.handleChangeemail}
               value={email}
               style={{width:'60%',padding: '0px 2%',height: '115px',outline:0,backgroundColor:'#ccc',border:0,borderRadius:'4px'}}/>
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