import React, { Component } from 'react';
import logo from '../images/errorpage.png';
import './Grid.css';

const Grid =(props)=>{
  return <section className="Grid" id={props.classidentifier}>{props.name}</section>;
}

export default Grid;

