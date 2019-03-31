import React, { Component } from 'react';
import logo from './r6_logo.png';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./react-tabs.css";

let tabs = (
  <Tabs className="Everything">
    <TabList>
      <Tab>Home</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>TEAM KILL PASS TRACKER</h1>
          <p>
            The beginnings of an EPIC Rainbow Six Siege (and other multiplayer game) Team Kill Pass system.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);

class App extends Component {
  render() {
    return (

      <div className="App">
        {tabs}
        
      </div>
    );
  }
}

export default App;
