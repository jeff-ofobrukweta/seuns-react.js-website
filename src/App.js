import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import Loader from './Loader/Loader';
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
        <Navbar/>
      </div>
    );
  }
}

export default App;
