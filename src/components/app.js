import React, { Component } from 'react';
import Navbar from './navbar';
import Profile from './profile';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
      </div>
    );
  }
}
