import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div>Top10VPN</div>
          <div>|||</div>
        </div>
        <div className="user-input">
          <div className="current-location">
            <div className="input-question">
              <div>Where are you now?</div>
            </div>
            <div className="input-select">
              <div>Select box</div>
            </div>
          </div>
          <div className="vpn-location">
            <div className="input-question">
              <div>Where do you want to VPN into?</div>
            </div>
            <div className="input-select">
              <div>Select box</div>
            </div>
          </div>
          <div className="text-period">
            <div className="input-question">
              <div>Period to test</div>
            </div>
            <div className="input-multi">Multi choice</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
