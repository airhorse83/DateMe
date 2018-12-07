import React, { Component } from 'react';
import Navbar from './navbar';
import Profile from './profile';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>
        <div className='profile-card'>
          <Profile/>
          <Profile/>
          <Profile/>
          <Profile/>
          <Profile/>
          <Profile/>
          </div>
        <Footer/>
      </div>
    );
  }
}
