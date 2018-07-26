import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import Loader from './Loader/Loader';
import Services from './About/About';
import {Route,Switch,Link} from 'react-router-dom';
import About from './Real-Aboutpage/Aboutpage';
import Product from './Products/Products';
import FlexMenu from './flex-menue/flexMenu';
import './App.css';

class App extends Component {
  state = {
    loading:true
  };
  componentDidMount(){
    setTimeout(()=>this.setState({loading:false}),3000)
  }

  render() {
    // const {loading} = this.state;
    // if(loading){
    //   return <Loader/>;
    // }
    return (
      <div className="App">
      <Switch>
      <Route path="/" exact component={Navbar}/>
      <Route path="/services" exact component={Services}/>
      <Route path="/about" exact component={About}/>
      <Route path="/work" exact component={Product}/>
      {
        // {this.state.auth? <Route path="/landing" exact component={AsyncMaterialCard}/>:null}
      }
      <Route render={()=>(<div>
                              <section>
                              <FlexMenu/>
                              <h1 style={{color:"#585656",textAlign:"center"}}>Not found</h1>
                              <article>
                              <span>
                                <h3>Where file upload becomes simple as flying planes...</h3>
                                <h4><Link to="/" >http://wwww.metroname.com</Link></h4>
                              </span>
                              <h2>if your seeing tis page it means your out of the scope of this application</h2>
                              </article>
                              </section>
                          </div>
      )}/>
    </Switch>
      </div>
    );
  }
}

export default App;
