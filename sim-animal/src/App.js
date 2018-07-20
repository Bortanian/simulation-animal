import React, { Component } from 'react';
import { withRouter } from 'react-router'
import './App.css';
import route from './route'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    const{location} = this.props
    return (
      <div className="App">
        {
          location.pathname === '/' ?
          '' :
          <Nav />
        }
        {route}
        {
          location.pathname === '/' ?
          '' :
          <Footer />
        }
      </div>
    );
  }
}

export default withRouter(App);
