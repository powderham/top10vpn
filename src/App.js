import React, { Component } from "react";
import Select from "react-select";
import { locations } from "./config";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: null,
      vpnLocation: null,
      testPeriod: null
    };

    this.handleCurrentChange = this.handleCurrentChange.bind(this);
    this.handleVpnChange = this.handleVpnChange.bind(this);
  }
  handleCurrentChange(currentLocation) {
    this.setState({ currentLocation });
  }
  handleVpnChange(vpnLocation) {
    this.setState({ vpnLocation });
  }
  render() {
    const { currentLocation, vpnLocation, testPeriod } = this.state;
    const selectArray = Object.keys(locations).map(location => {
      return {
        value: location,
        label: locations[location]
      };
    });
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
              <Select
                name="select-box"
                value={currentLocation}
                onChange={this.handleCurrentChange}
                options={selectArray}
              />
            </div>
          </div>
          <div className="vpn-location">
            <div className="input-question">
              <div>Where do you want to VPN into?</div>
            </div>
            <div className="input-select">
              <Select
                name="select-box"
                value={vpnLocation}
                onChange={this.handleChange}
                options={selectArray}
              />
            </div>
          </div>
          <div className="test-period">
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
