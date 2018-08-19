import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from './Grid/Grid';
import Navbar from './Navbar/Navbar';
import Loader from './Loader/Loader';
import Services from './About/About';
import {Route,Switch,Link} from 'react-router-dom';
import About from './Real-Aboutpage/Aboutpage';
import Product from './Products/Products';
import Naviconbar from './flex-menue/flexMenu';
import Test from './flex-menue/flexMenu';
import './App.css';
import Errorpage from './Error/Error';

class App extends Component {
  state = {
    loading:true
  };
  componentDidMount(){
    setTimeout(()=>this.setState({loading:false}),3000);
  }

  render() {
    // const {loading} = this.state;
    // if(loading){
    //   return <Loader/>;
    // }
    return (
      <div className="App">
      <Grid/>
      <Switch>
      <Route path="/" exact component={Navbar}/>
      <Route path="/services" exact component={Services}/>
      <Route path="/about" exact component={About}/>
      <Route path="/work" exact component={Product}/>
      <Route  component={Errorpage}/>
      {
        // {this.state.auth? <Route path="/landing" exact component={AsyncMaterialCard}/>:null}
      }
    </Switch>
      </div>
    );
  }
}

export default App;
