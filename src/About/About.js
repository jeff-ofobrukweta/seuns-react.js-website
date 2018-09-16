import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Desk from '../images/Data.png';
import City from '../images/city.png';
import Logolanding from '../images/icecream.jpg';
import First from '../images/Advanced.png';
import Secound from '../images/Real TIme.png';
import Third from '../images/Geo spatial_Icon.png';
import Fourth from '../images/Plan.png';
import Fifth from '../images/Tree.png';
import Sixth from '../images/Forma 1.png';
import Appanimate from '../Navbar/text';
import Loader from '../Loader/Loader';
import Navibaricon from '../flex-menue/flexMenu';
import Messagebox from '../Grid/Grid';
import Data from '../images/Group 6.png';
import Information from '../images/Group 7.png';
import Knowledge from '../images/Group 8.png';
import Wisdom from '../images/Group 9.png';
import Dart from '../images/Target_New.png';
import Nav1 from '../Loader/Nav1';
import Nav2 from '../Loader/Nav2';
import Nav3 from '../Loader/Nav3';
import Nav4 from '../Loader/Project';
import axios from 'axios';

import './About.css';


class About extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            error:'',
            flashmessageIdentifier:'',
            emailSentmessage:''
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
                  this.props.history.push("/services");
                  setTimeout(()=>{
                    flash.push('display-none');
                   this.props.history.push('/');
                   this.props.history.push('/services');
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
      <div className="About-parent-container">
      <Loader/>
      <Nav1/>
      <Nav2/>
      <Nav3/>
      <Nav4/>
        <div className="one-about">
            <div className="Nested-about">
                <div className="image-holder">
                    <img src={Dart} alt="dart-image"/>
                </div>
            <Navibaricon/>
        <p className="first-about">
            <div className="big-module-before-nest">
                <div className="nested-A"> 
                    <h2 style={{fontSize: '30px',fontWeight:'bold'}}>SOLUTION FOCUSED THINKING</h2>
                </div>
                <div className="nested-A" id="orange" style={{width: '45%',position: 'relative',left: '27%',marginTop:30,marginBottom:30,borderBottom:'1px solid #e14800'}}></div>
                <div className="nested-A">
                    <section className="section-mobile" style={{fontSize:'1.5vmax',fontWeight: 300,lineHeight:'25px'}}>
                    We enable seamless,integrated strategies for the use of data and information to address<br/> 
                    human settlements and environmental challenges in developing countries,by generating<br/>
                    and carrying out knowledge-intensive activities that provide largely customized<br/>
                    innovations in the areas of Data Infrastructure Management & Communications Services<br/>
                    and Human Settlement & Environment.
                    </section>
                </div>
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
            <div style={{width: '50%',position: 'relative',left: '25%',marginTop:10,borderBottom:'2px solid #f8cbad'}}></div>
            </section>
            <section style={{marginTop:'20px'}}>
            With the emergence of modern day digital revolution, the challenges of data<br/>
            discovery, data access and data  sharing to make informed desgions continue<br/> 
            to grow.We provide domain expertise in this area by addressing the following<br/>
            concerns to sustainable enviromental development
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
                        background: '#3b3838',
                        fontWeight:'bold',
                        color:'#ecbda5'.log
                        }}>
                        <img src={First} alt="image-desktop" style={{position:'relative',width:'40px'}}  className="icon-animate"/><br/>
                    Advanced geographic information<br/>analysis & spartial Enablements</section>
                    <section style={{margin:'20px'}}>
                        Location is the center of everyday <br/>
                        activities.Metronome designs related <br/>
                        solutions that respond to the “WHERE <br/>
                        QUESTION”
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
                            background: '#3b3838',
                            fontWeight:'bold',
                            color:'#ecbda5'
                            }}>
                            <img src={Secound} alt="image-desktop" style={{position:'relative',width:'40px'}}  className="icon-animate"/><br/>
                        Real Time Analysis &<br/>Projections</section>
                        <section style={{margin:'20px'}}>
                        Data resolves global problems.<br/>
                        We provide private and public<br/>
                        organizations with real time solutions<br/>
                        through real time understanding within the<br/>
                        enviroment by capturing data through<br/>
                        the deployment of modern technology and<br/>
                        interactive integration of textual and<br/> 
                        spatial data.
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
                    background: '#3b3838',
                    fontWeight:'bold',
                    color:'#ecbda5'
                    }}>
                    <img src={Third} alt="image-desktop" style={{position:'relative',width:'40px'}}  className="icon-animate"/><br/>
                    Geospatial Web Services &<br/>Use case Applications</section>
                    <section style={{margin:'20px'}}>
                    E-plan, E-planning & i-land.<br/>
                    We utilise these tools to provide web<br/>
                    based solutions that aid real life<br/>
                        innovation strategies.<br/>
                    Our goal is to constantly provide an<br/>
                    inclusive platform for community <br/>
                    engagement & consultation ultimately.<br/>
                    creating livable enviroments
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
            HUMAN SETTLEMENT <br/>
            AND ENVIROMENT.
            </h2>
            <div style={{width: '50%',position: 'relative',left: '25%',marginTop:10,borderBottom:'2px solid #f8cbad'}}></div>
            </section>
            <section style={{marginTop:'20px'}}>
            Already,more than half of the world population lives in urban areas,<br/> 
            resulting in significant social and environmental consequences.<br/>
            Metronome uses enabling technologies for seamless measurement,<br/> 
            monitoring, understanding and management of urban dynamism.
            </section>
        </p>
        </div>
        <div className="five-about" style={{textAlign:'center',paddingBottom:' 5%'}}>
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
                    background: '#3b3838',
                    fontWeight:'bold',
                    color:'#ecbda5'
                    }}>
                    <img src={Fourth} alt="image-desktop" style={{position:'relative',width:'40px'}}  className="icon-animate"/><br/>
                    Comprehensive &<br/>Strategic Planning</section>
                    <section style={{margin:'20px'}}>
                        Allocation of space & location of uses<br/>
                        to achieve sustainability,productivity &<br/>
                        liveability are the foundation for the<br/>
                        growth & development of cites
                        and regions.At Metronome we generate plans through<br/>
                        holistic deliberate processes.
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
                    background: '#3b3838',
                    fontWeight:'bold',
                    color:'#ecbda5'
                    }}>
                    <img src={Fifth} alt="image-desktop" style={{position:'relative',width:'40px'}}  className="icon-animate"/><br/>
                Design &<br/>Enviromental Stewarship</section>
                <section style={{margin:'20px'}}>
                Aligning with the global mission to achieve<br/>
                the Sustainabe  Development <br/>
                Goals, Metronome explores solutions for<br/>
                restoring cities by addressing issues of urban<br/>
                poverty through optimisation of dead<br/> 
                capital and resources.
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
                    background: '#3b3838',
                    fontWeight:'bold',
                    color:'#ecbda5'
                    }}>
                    <img src={Sixth} alt="image-desktop" style={{position:'relative',width:'50px'}}  className="icon-animate"/><br/>
                Transportation and<br/>Land Use</section>
                <section style={{margin:'20px'}}>
                There is a need for paradigm shift in the<br/>
                design and delivery of trasportation services for<br/> 
                rural/urban environments to  compliment<br/>
                location of uses and allocation of spaces.<br/>
                Leveraging on data,we ensure these needs are<br/>
                properly delivered.
                </section>
                </div>
                </section>
            </p>
        </div>
        <div className="six-about">
            <p>
                        <section style={{textAlign:'center'}}>
                            <section className="main-flex-container">
                            <div className="flex-container-1-first-element">
                                <img src={Data} href="Data" className="image-icon-A"/>
                                <div className="flex-item"><b>Data</b></div>
                            </div>
                            <div className="flex-container-1">
                                <img src={Information} href="Information" className="image-icon-A"/>
                                <div className="flex-item"><b>Information</b></div>
                            </div>
                            <div className="flex-container-1">
                                <img src={Knowledge} href="Knowledge" className="image-icon-A"/>
                                <div className="flex-item"><b>Knowledge</b></div>
                            </div>
                            <div className="flex-container-1-last-element">
                                <img src={Wisdom} href="Wisdom" className="image-icon-A"/>
                                <div className="flex-item"><b>Wisdom</b></div>
                            </div>
                        </section>
                        <div className="nested-A" id="orange" style={{borderBottom:'2px solid #f8cbad',width:'30%',margin: '13px 35%'}}></div>
                        <section style={{fontSize:'16px',letterSpacing:'0px'}}>
                        <b>
                            Creating a sustainable enviroment demands informed decisions.<br/>
                            Let us drive enviromental development through data together.
                        </b>.log
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
        <div className="seven-about">
            <p>
            <span className="ten-hi" style={{textAlign: 'left'}}>
                    <header style={{margin: '11px 20%'}}>
                        <h2>LEARN MORE</h2><br/>
                        Projects<br/>
                        Clients
                    </header>
                    <header className="mobile-header-only" style={{margin: '11px 20%'}}>
                        <h2>ABOUT US</h2><br/>
                        About Metronome<br/>
                        Work Process
                    </header>
                </span>
                <section style={{textAlign:'center'}}>
                    <input type="text" placeholder=" NAME" style={{width:'60%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#eee',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
                    <input type="text" placeholder=" EMAIL" style={{width:'60%',height: 34,border:0,margin: '30px 0px',backgroundColor:'#eee',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
                    <input type="text" placeholder=" SUBJECT" style={{width:'60%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#eee',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
                </section>
            </p>
            <section  id="form">
            <form onSubmit={this.handleSubmitlogin}>
            <p>
               <label>
               <span className="ten-hi" className="mobile-header-right">
               <header style={{margin: '11px 20%'}}>
                    <h2>ABOUT US</h2><br/>
                    About Metronome<br/>
                    Work Process
               </header>
               </span>
               <section style={{textAlign:'center'}}>
               <Messagebox name={emailSentmessage} classidentifier={flashmessageIdentifier}/>
               <section className="textarea-section" style={{textAlign:'center'}}>
               <textarea placeholder=" write a message here.." onChange={this.handleChangeemail}
               value={email}
               style={{width:'60%',height: '115px',outline:0,backgroundColor:'#eee',border:0,borderRadius:'4px',padding: '0px 2%'}}/>
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
            </section>
        </div>
        <div className="eight-about" style={{padding:'20px',background:'#eee'}}>
                <p>
                <section>
                <a href="#" className="logo" style={{marginLeft:'0rem'}}><input type="submit" value="Metronome" style={{height: '30px',width: '110px',border: '0px',position:'relative',left:'0%',outline:' none',color:'#ffffff',background: '#232323',fontWeight:700,marginBottom:'10%'}}/></a>
                <h2 className="logo-header">LAGOS</h2>
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
                <h2 className="logo-header">ABUJA</h2>
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
                <h2 className="logo-header">MOBILE</h2>
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