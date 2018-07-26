import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Loader from '../Loader/Loader';
import Naviconbar from '../Naviconbar/Naviconbar';
import sketch from '../images/products.png';
import buildsketch from '../images/error_missing.svg';
import axios from 'axios';
import './Products.css';

class Product extends Component {
    componentDidMount(){
        // const collect = prompt('hello drive away');

    }
    constructor(props){
        super(props);
        this.state ={
            isToggleOn:true,
            isToggleOnlarge:true,
            email:'',
            error:''
        }
        this.handleClicktoogle = this.handleClicktoogle.bind(this);
        this.handleClicktooglelargecard = this.handleClicktooglelargecard.bind(this);
        this.handleChangeemail = this.handleChangeEmail.bind(this);
        this.handlesubmitlogin = this.handleSubmitlogin.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    handleClicktoogle=(e)=>{
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
    }
    handleClicktooglelargecard=(e)=>{
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOnlarge: !prevState.isToggleOnlarge
          }));
    }
    
    
      async handleSubmitlogin(event){
        event.preventDefault();
        const data = {
            email:this.state.email,
        };
        await axios.post('http://localhost:1337/findonethroughEmail',data)
        .then((response)=> {
            console.log(">>>>>>>",JSON.stringify(response,null,2));
        //   this.setState({message:response.data,responsedata:response.data});
              if(response.status===200){
                // sessionStorage.setItem('myuserData',this.state.responsedata);
                  this.props.history.replace("/about");
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
          const {email} = this.state;
          const displaySign = [];
          const displaylargeCard =[];
          if(this.state.isToggleOn==true){
            displaySign.push('display');
          }else
          {
            displaySign.push('');
          }
          if(this.state.isToggleOnlarge==true){
            displaylargeCard.push('displaylargeCard');
          }
          else{
              displaylargeCard.push('');
          }
    return (
      <div className="Product">
            <div className="Navbar-workabout">
                <Loader/>
            <div className="workabout-one-parent">
            <Naviconbar/>
            <div className="workabout-one">
                <p>
                <div className="nested-A"> 
                    <h2 style={{fontSize: '32px',fontWeight:'bold',lineHeight:'calc(100%)'}}>TAILOURED TO SPECIFIC NEED</h2>
                </div>
                <div className="nested-A" id="orange" style={{borderBottom:'2px solid #e14800',width:'50%',margin:'20px 25%'}}></div>
                <section>
                Providing usable solutions remains the pivot that supports<br/>
               our research and execution process.
                </section>
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
                    <h1 style={{fontSize:'30px'}}>Application of developed data infrastructure</h1>
                    <br/>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px'}} className={displaySign}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" onClick={this.handleClicktoogle} value="VIEW MORE" style={{color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
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
                    <h1 style={{fontSize:'30px'}}>Application of developed data infrastructure</h1>
                    <br/>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" value="VIEW MORE" style={{color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
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
                    <h1 style={{fontSize:'30px'}}>Application of developed data infrastructure</h1>
                    <br/>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px'}} className={displaySign}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" value="VIEW MORE" style={{color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
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
                    <h1 style={{fontSize:'30px'}}>Application of developed data infrastructure</h1>
                    <br/>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit"  value="VIEW MORE" style={{color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
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
                    <h1 style={{fontSize:'30px'}}>Application of developed data infrastructure</h1>
                    <br/>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit" value="VIEW MORE" style={{color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
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
                    <h1 style={{fontSize:'30px'}}>Application of developed data infrastructure</h1>
                    <br/>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit"  value="VIEW MORE" style={{color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
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
                    <h1 style={{fontSize:'30px'}}>Application of developed data infrastructure</h1>
                    <br/>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{fontSize:'16px'}}>
                        management and communication to improve Human settlement and enviroment.
                        Application of developed data infrastructure,information<br/>
                    </section>
                    <section style={{padding: '2%  0px',textAlign: 'left'}}>
                    <input type="submit"  value="VIEW MORE" style={{color:'#fff',fontSize:'18px',fontWeight:700,width: '150px',height: '42px',background: '#e14800',outline: 0,border: 0,borderRadius:4}}/>
                    </section>
                    </section>
                    </div>
                </div>
        </div>
            <section style={{textAlign: '-webkit-center'}}>
            <div className="fa fa-caret-down fa-1x" id="product-orange-button" onClick={this.handleClicktooglelargecard} style={{
                            width: '70px',
                            height: '70px',
                            backgroundColor: 'rgb(226, 72, 0)',
                            borderRadius: '50%',
                            textAlign:'center',
                            position:'relative',
                            top: '-31px',
                            margin: '0% auto',
                            fontSize: '36px',
                            lineHeight: '70px',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: '1',
                            transition: 'all 0.3s ease-in-out'
                        }}></div>
            </section>
      </div>
        <div className="workabout-three">
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
        <div className="workabout-four">
        <p>
        <span className="ten-hi" style={{textAlign: 'left'}}>
                <header style={{margin: '11px 20%'}}>
                    <h2>LEARN MORE</h2><br/>
                    Projects<br/>
                    Clients
                </header>
            </span>
            <section style={{textAlign:'center'}}>
                <input type="text" placeholder=" NAME"  style={{width:'60%',height: 34,border:0,margin: '0px 0px',backgroundColor:'#ccc',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
                <input type="text" placeholder=" EMAIL"  style={{width:'60%',height: 34,border:0,margin: '30px 0px',backgroundColor:'#ccc',outline:0,padding: '0px 2%',borderRadius:'4px'}}/>
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
        <section className="textarea-section" style={{textAlign:'center'}}>
        <textarea placeholder=" write a message here.."
            value={email} onChange={this.handleChangeemail}
            style={{width:'60%',height: '115px',outline:0,backgroundColor:'#ccc',border:0,borderRadius:'4px',padding: '0px 2%'}}/>
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

export default Product;
