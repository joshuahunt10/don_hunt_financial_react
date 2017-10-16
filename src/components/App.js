import React, { Component } from 'react';
import '../styles/App.css';
import skyline from '../styles/images/skyline.jpg'
import profilePic from '../styles/images/profile_pic.jpg'

import {Route, Switch} from 'react-router-dom'
import BaseLayout from './BaseLayout'
import {Jumbotron} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <Jumbotron>
            <div className="jumboImage">..</div>
            {/* <img src={skyline}/> */}
          </Jumbotron>
          <div className="AboutMe" id="AboutMe">
            <img className="profilePic" src={profilePic} />
            <p className="container aboutText">
              My name is Don Hunt and I want to take time to introduce myself and my family.  I grew up in Pasadena, Texas and have lived in Deer Park, Texas since 1983.  I started my career in the insurance business in 1985 with David Hilditch, whom I still work with today.
            </p>
            <p className="container aboutText">
              I am married and have four children.  My wife, Teresa, is a retured math teacher is currently working in accounting.  My children are Matthew who lives in Clear Lake and is a math teacher, Josh who is married to Jessica and is a scientist lives in Houston, Heather is married to Adam and lives in Hawaii and is a pharmacist technician, and Jordon is a truck driver living in St. Louis.  We are members of Deer Park United Methodist Church.
            </p>
            <p className="container aboutText">
              I respect my clients as if they are my own family; believing that my relationship with my clients must be built on trust and reliability.  I look forward to developing a relationship with you.
            </p>


          </div>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
