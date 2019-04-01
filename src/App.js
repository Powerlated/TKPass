import React, { Component } from 'react';
import logo from './r6_logo.png';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';

import Button from '@material-ui/core/Button';

const ColumnHeader = ({ onClick, onClickAll }) => (
  <div className="row colheader">
    <div className="col-xs-1">
      <h4>#</h4>
    </div>
    <div className="col-xs-5">
      <h4>Name</h4>
    </div>
    <div className="col-xs-3 recent">
      <h4 onClick={onClick}>Last 30 days</h4>
    </div>
    <div className="col-xs-3 alltime">
      <h4 onClick={onClickAll}>All time</h4>
    </div>
  </div>
);

class App extends Component {
  _clickAllTime(e) {
    let sorted = this.state.list.sort((a, b) => b.alltime - a.alltime);
    this.setState(sorted);
  }

  _clickRecent(e) {
    let sorted = this.state.list.sort((a, b) => b.recent - a.recent);
    this.setState(sorted);
  }

  render() {
    return (
      <div className="App">
        <Tabs className="Everything">
          <TabList>
            <Tab>R6S TK PASS</Tab>
            <Tab>Members</Tab>
            <Tab>Staff</Tab>
            <Tab>Leaderboard</Tab>
            <Tab>Requests</Tab>
          </TabList>

          <TabPanel>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="" />
              <h1>TEAM KILL PASS TRACKER</h1>
              <p>
                The beginnings of an EPIC Rainbow Six Siege (and other
                multiplayer game) Team Kill Pass system.
              </p>

              <h2>Why did I make this?</h2>
              <p>
                To be completely <s>hecking</s> honest, I do not know.
              </p>
              <p>
                Actually, to be realer than real, I made this system because I
                was instpired by a guy named yeboizaidey on Discord to do so. He
                sorta started a TK Pass "honor system" that just grew into a
                giant meme. Zaidey also tried to convince me that making this
                website was all a big waste of time, but I did not listen
                because I am always up for a challenge.
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
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <Button variant="contained" color="primary">
              Material
            </Button>
            <ColumnHeader
              onClickAll={this._clickAllTime}
              onClick={this._clickRecent}
            />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
