import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Loader from '../Loader/Loader';
import Naviconbar from '../flex-menue/flexMenu';
import sketch from '../images/products.png';
import buildsketch from '../images/error_missing.svg';
import Messagebox from '../Grid/Grid';
import Data from '../images/Group 6.png';
import Information from '../images/Group 7.png';
import Knowledge from '../images/Group 8.png';
import Wisdom from '../images/Group 9.png';
import Screw from '../images/cropgear.png';
import Arrow from '../images/Arrowdown-01.png';
import axios from 'axios';
import './Products.css';

class Product extends Component {
    componentDidMount(){
        // const collect = prompt('hello drive away');

    }
    constructor(props){
        super(props);
        this.state ={
            email:'',
            error:'',
            flashmessageIdentifier:'',
            emailSentmessage:'',
            isToggleOn1:true,
            isToggleOn2:true,
            isToggleOn3:true,
            isToggleOn4:true,
            isToggleOn5:true,
            isToggleOn6:true,
            isToggleOn7:true,
            isToggleOnlarge:true
        }
        this.handleClicktoogle1 = this.handleClicktoogle1.bind(this);
        this.handleClicktoogle2 = this.handleClicktoogle2.bind(this);
        this.handleClicktoogle3 = this.handleClicktoogle3.bind(this);
        this.handleClicktoogle4 = this.handleClicktoogle4.bind(this);
        this.handleClicktoogle5 = this.handleClicktoogle5.bind(this);
        this.handleClicktoogle6 = this.handleClicktoogle6.bind(this);
        this.handleClicktoogle7 = this.handleClicktoogle7.bind(this);

        this.handleClicktooglelargecard = this.handleClicktooglelargecard.bind(this);
        this.handleChangeemail = this.handleChangeEmail.bind(this);
        this.handlesubmitlogin = this.handleSubmitlogin.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
        console.log(">>>>>>>"+this.state.email);
    }
    // this is for the show more button on large-material-card
    handleClicktoogle1=(e)=>{
        e.preventDefault();
        this.setState(prevState1 => ({
            isToggleOn1: !prevState1.isToggleOn1
    }));
    }
    handleClicktoogle2=(e)=>{
        e.preventDefault();
        this.setState(prevState2 => ({
            isToggleOn2: !prevState2.isToggleOn2
    }));
    }
    handleClicktoogle3=(e)=>{
        e.preventDefault();
        this.setState(prevState3 => ({
            isToggleOn3: !prevState3.isToggleOn3
    }));
    }
    handleClicktoogle4=(e)=>{
        e.preventDefault();
        this.setState(prevState4 => ({
            isToggleOn4: !prevState4.isToggleOn4
    }));
    }
    handleClicktoogle5=(e)=>{
        e.preventDefault();
        this.setState(prevState5 => ({
            isToggleOn5: !prevState5.isToggleOn5
    }));
    }
    handleClicktoogle6=(e)=>{
        e.preventDefault();
        this.setState(prevState6 => ({
            isToggleOn6: !prevState6.isToggleOn6
    }));
    }
    handleClicktoogle7=(e)=>{
        e.preventDefault();
        this.setState(prevState7 => ({
            isToggleOn7: !prevState7.isToggleOn7
    }));
    }


    // this is for the large-card toogleing effect
    handleClicktooglelargecard=(e)=>{
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOnlarge: !prevState.isToggleOnlarge
          }));
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
                  this.props.history.push("/work");
                  setTimeout(()=>{
                    flash.push('display-none');
                   this.props.history.push('/');
                   this.props.history.push('/work');
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
          const displaySign1 = [];
          const displaySign2 = [];
          const displaySign3 = [];
          const displaySign4 = [];
          const displaySign5 = [];
          const displaySign6 = [];
          const displaySign7 = [];
          const displayMiddlefloatbuttonsign = [];
          const displaylargeCard =[];
          if(this.state.isToggleOn1==true){
            displaySign1.push('display');
          }else
          {
            displaySign1.push('');
          }
          if(this.state.isToggleOn2==true){
            displaySign2.push('display');
          }else
          {
            displaySign2.push('');
          }
          if(this.state.isToggleOn3==true){
            displaySign3.push('display');
          }else
          {
            displaySign3.push('');
          }
          if(this.state.isToggleOn4==true){
            displaySign4.push('display');
          }else
          {
            displaySign4.push('');
          }
          if(this.state.isToggleOn5==true){
            displaySign5.push('display');
          }else
          {
            displaySign5.push('');
          }
          if(this.state.isToggleOn6==true){
            displaySign6.push('display');
          }else
          {
            displaySign6.push('');
          }
          if(this.state.isToggleOn7==true){
            displaySign7.push('display');
          }else
          {
            displaySign7.push('');
          }


          if(this.state.isToggleOnlarge==true){
            displaylargeCard.push('displaylargeCard');
          }
          else{
              displaylargeCard.push('');
          }
    return (
      <div className="Product">
            <Naviconbar/>
            <div className="Navbar-workabout">
                <Loader/>
            <div className="workabout-one-parent">
            <div className="workabout-one">
                <p>
                <div className="nested-A"> 
                    <h2 style={{fontSize: '3vmax',fontWeight:'bold',lineHeight:'calc(100%)'}}>TAILORED TO SPECIFIC NEED</h2>
                </div>
                <div className="nested-A" id="orange" style={{borderBottom:'2px solid #f8cbad',width:'50%',margin:'20px 25%'}}></div>
                <section style={{marginBottom:'10%',fontSize: '1.9vmax'}}>
                Providing usable solutions remains the<br/>
                pivot that supports our research and execution process.
                </section>
                <div className="container-xcrew">
                    <img src={Screw} alt="xrew" className="xrew"/>
                </div>
                </p>
            </div>
            </div>
      </div>
      <div className="workabout-two">
        <div className="workabout-two-parent">
                <div class="long-card long-card-1">
                    <div className="box one">
                    <img style={{width:'100%',height:'inherit',objectFit:"cover",height:'100%'}} src={sketch} alt="png"/>
                    </div>
                    <div className="box two" style={{padding: '30px'}}>
                    <section>
                    <h1 style={{fontSize:'30px',textAlign:'left'}}>Application of developed data infrastructure</h1>
                    <h2 style={{fontSize:'25px',textAlign:'left'}}>Fedral Ministry of Education</h2>
                    <br/>
                    <section style={{fontSize:'16px',textAlign:'left'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px',textAlign:'left'}} className={displaySign1}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information--1<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" onClick={this.handleClicktoogle1} value="VIEW MORE" style={{outline:'none',color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    </section>
                    </section>
                    </div>
                </div>
                <div class="long-card long-card-1"> 
                    <div className="box one">
                    <img style={{width:'100%',height:'inherit',objectFit:"cover",height:'100%'}} src={sketch} alt="png"/>
                    </div>
                    <div className="box two" style={{padding: '30px'}}>
                    <section>
                    <h1 style={{fontSize:'30px',textAlign:'left'}}>Application of developed data infrastructure</h1>
                    <h2 style={{fontSize:'25px',textAlign:'left'}}>Fedral Ministry of Education</h2>
                    <br/>
                    <section style={{fontSize:'16px',textAlign:'left'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px',textAlign:'left'}} className={displaySign2}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information--2<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" onClick={this.handleClicktoogle2} value="VIEW MORE" style={{outline:'none',color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    </section>
                    </section>
                    </div>
                </div>
                <div class="long-card long-card-1">
                    <div className="box one">
                    <img style={{width:'100%',height:'inherit',objectFit:"cover",height:'100%'}} src={sketch} alt="png"/>
                    </div>
                    <div className="box two" style={{padding: '30px'}}>
                    <section>
                    <h1 style={{fontSize:'30px',textAlign:'left'}}>Application of developed data infrastructure</h1>
                    <h2 style={{fontSize:'25px',textAlign:'left'}}>Fedral Ministry of Education</h2>
                    <br/>
                    <section style={{fontSize:'16px',textAlign:'left'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px',textAlign:'left'}} className={displaySign3}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information--3<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" onClick={this.handleClicktoogle3} value="VIEW MORE" style={{outline:'none',color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    </section>
                    </section>
                    </div>
                </div>
                <div class="long-card long-card-1" id={displaylargeCard}>
                    <div className="box one">
                    <img style={{width:'100%',height:'inherit',objectFit:"cover",height:'100%'}} src={buildsketch} alt="png"/>
                    </div>
                    <div className="box two" style={{padding: '30px'}}>
                    <section>
                    <h1 style={{fontSize:'30px',textAlign:'left'}}>Application of developed data infrastructure</h1>
                    <h2 style={{fontSize:'25px',textAlign:'left'}}>Fedral Ministry of Education</h2>
                    <br/>
                    <section style={{fontSize:'16px',textAlign:'left'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px',textAlign:'left'}} className={displaySign4}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information--4<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" onClick={this.handleClicktoogle4}  value="VIEW MORE" style={{color:'#fff',outline:'none',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    </section>
                    </section>
                    </div>
                </div>
                <div class="long-card long-card-1" id={displaylargeCard}>
                    <div className="box one">
                    <img style={{width:'100%',height:'inherit',objectFit:"cover",height:'100%'}} src={sketch} alt="png"/>
                    </div>
                    <div className="box two" style={{padding: '30px'}}>
                    <section>
                    <h1 style={{fontSize:'30px',textAlign:'left'}}>Application of developed data infrastructure</h1>
                    <h2 style={{fontSize:'25px',textAlign:'left'}}>Fedral Ministry of Education</h2>
                    <br/>
                    <section style={{fontSize:'16px',textAlign:'left'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px',textAlign:'left'}} className={displaySign5}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information--5<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" onClick={this.handleClicktoogle5} value="VIEW MORE" style={{color:'#fff',outline:'none',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    </section>
                    </section>
                    </div>
                </div>
                <div class="long-card long-card-1" id={displaylargeCard}>
                    <div className="box one">
                    <img style={{width:'100%',height:'inherit',objectFit:"cover",height:'100%'}} src={buildsketch} alt="png"/>
                    </div>
                    <div className="box two" style={{padding: '30px'}}>
                    <section>
                    <h1 style={{fontSize:'30px',textAlign:'left'}}>Application of developed data infrastructure</h1>
                    <h2 style={{fontSize:'25px',textAlign:'left'}}>Fedral Ministry of Education</h2>
                    <br/>
                    <section style={{fontSize:'16px',textAlign:'left'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px',textAlign:'left'}} className={displaySign6}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information--6<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" onClick={this.handleClicktoogle6}  value="VIEW MORE" style={{color:'#fff',outline:'none',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    </section>
                    </section>
                    </div>
                </div>
                <div class="long-card long-card-1" id={displaylargeCard}>
                    <div className="box one">
                    <img style={{width:'100%',height:'inherit',objectFit:"cover",height:'100%'}} src={sketch} alt="png"/>
                    </div>
                    <div className="box two" style={{padding: '30px'}}>
                    <section>
                    <h1 style={{fontSize:'30px',textAlign:'left'}}>Application of developed data infrastructure</h1>
                    <h2 style={{fontSize:'25px',textAlign:'left'}}>Fedral Ministry of Education</h2>
                    <br/>
                    <section style={{fontSize:'16px',textAlign:'left'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px',textAlign:'left'}} className={displaySign7}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information--7<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" onClick={this.handleClicktoogle7}  value="VIEW MORE" style={{color:'#fff',fontSize:'18px',fontWeight:700,outline:'none',width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    </section>
                    </section>
                    </div>
                </div>
        </div>
            <section style={{textAlign: '-webkit-center'}}>
            <div id="product-orange-button" onClick={this.handleClicktooglelargecard} style={{
                            width: '70px',
                            height: '70px',
                            backgroundColor: '#e14800',
                            borderRadius: '50%',
                            textAlign:'center',
                            position:'relative',
                            top: '-31px',
                            margin: '0% 45%',
                            fontSize: '36px',
                            lineHeight: '70px',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: '999999999999999',
                            transition: 'all 0.3s ease-in-out'
                        }}><img src={Arrow} alt="arrow-icon"/></div>
            </section>
      </div>
        <div className="workabout-three">
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
                    <div className="nested-A" id="orange" style={{borderBottom:'2px solid #e14800',width:'30%',margin: '13px 35%'}}></div>
                    <section style={{fontSize:'16px',letterSpacing:'0px'}}>
                    <b>
                        Creating a sustainable enviroment demands informed decisions.<br/>
                        Let us drive enviromental development through data together.
                    </b>
                    </section>
                    <input type="submit" value="GET IN TOUCH" style={{color:'rgb(255, 255, 255)',margin:'10px 0px',
                        fontWeight: 700,
                        fontSize:'18px',
                        width: '150px',
                        height: '42px',
                        background:'#e14800',
                        outline: '0px',
                        border: '0px',
                        borderRadius: '4px'}}/>
                    </section>
        </p>
        </div>
        <div className="workabout-four">
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
                <input type="text" placeholder=" NAME"  style={{width:'60%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#eee',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
                <input type="text" placeholder=" EMAIL"  style={{width:'60%',height: 34,border:0,margin: '30px 0px',backgroundColor:'#eee',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
                <input type="text" placeholder=" SUBJECT" style={{width:'60%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#eee',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
            </section>
        </p>
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
        <section className="textarea-section" style={{textAlign:'center'}}  id="form">
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
        </div>
        <div className="workabout-five" style={{padding:'20px'}}>
                <p>
                <section>
                <a href="#" className="logo" style={{marginLeft:'0rem'}}><input type="submit" value="Metronome" style={{height: '30px',width: '110px',border: '0px',outline:' none',color:'#ffffff',background: '#232323',fontWeight:700,marginBottom:'10%'}}/></a>
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

export default Product;
