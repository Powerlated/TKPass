import React, { Component } from "react";
import logo from "./r6_logo.png";
import "./App.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";

import Leaderboard from "./leaderboard/Leaderboard";
import "./leaderboard/Leaderboard.css";

import { Form, Text } from 'informed';


class App extends Component {
  render() {
    let leaderboard = <Leaderboard />;

    const leaderboardTab = (
      <TabPanel
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {leaderboard}
      </TabPanel>
    );

    return (
      <div className="App">
        <Tabs className="Everything">
          <TabList>
            <Tab>
              <div id="tabtext">R6S TK PASS</div>
            </Tab>
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
                was inspired by a guy named yeboizaidey on Discord to do so. He
                sorta started a TK Pass "honor system" that just grew into a
                giant meme. Zaidey also tried to convince me that making this
                website was all a big waste of time, but I did not listen
                because I am always up for a challenge.
              </p>
              {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
            </header>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>

          {leaderboardTab}

          <TabPanel>REQUESTS</TabPanel>
        </Tabs>
        <p style={{ color: "gray" }}>
          This website is completely unrelated and unaffiliated with Rainbow
          Six, Ubisoft, or any of its properties and IP.
        </p>
      </div>
    );
  }
}

export default App;
