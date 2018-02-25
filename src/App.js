import React, { Component } from "react";
import Select from "react-select";
import {
  locations,
  timePeriods,
  formatJsonObject,
  prepareEndpoint,
  offlineApi
} from "./config";
import Result from "./components/Result";

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
    this.handlePeriodClick = this.handlePeriodClick.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.fetchOfflineResults = this.fetchOfflineResults.bind(this);
  }
  handleCurrentChange(currentLocation) {
    this.setState({ currentLocation });
  }
  handleVpnChange(vpnLocation) {
    this.setState({ vpnLocation });
  }
  handlePeriodClick(e) {
    this.setState({ testPeriod: e.target.id });
  }
  fetchResults() {
    const { currentLocation, vpnLocation, testPeriod } = this.state;
    if (currentLocation && vpnLocation && testPeriod) {
      const url = prepareEndpoint(
        currentLocation.value,
        vpnLocation.value,
        testPeriod
      );
      fetch(url)
        .then(response => response.json())
        .then(results => this.setState({ results }));
    }
    //Handle non-complete input
  }

  fetchOfflineResults() {
    // this.setState({ offlineApi })
    const results =
      // Object.keys(offlineApi).map(key => ({
      //   [key]: offlineApi[key]
      // }));
      [
        ...Object.keys(offlineApi)
          // Get an array of object from the object of objects
          .map(key => offlineApi[key])
      ];
    setTimeout(() => this.setState({ results: results }), 2000);
  }

  render() {
    const { currentLocation, vpnLocation, testPeriod, results } = this.state;
    const selectArray = formatJsonObject(locations);
    const timePeriodArray = formatJsonObject(timePeriods);
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
                placeholder=""
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
                onChange={this.handleVpnChange}
                options={selectArray}
                placeholder=""
              />
            </div>
          </div>
          <div className="test-period">
            <div className="input-question">
              <div>Period to test</div>
            </div>
            <div className="input-multi">
              {timePeriodArray.map(period => (
                <div
                  key={period.value}
                  onClick={this.handlePeriodClick}
                  id={period.value}
                >
                  {period.label}
                </div>
              ))}
            </div>
          </div>
          <div onClick={this.fetchOfflineResults}>View results</div>
          {results &&
            results.map(result => {
              console.log(result);
              return (
                <Result
                  serviceName={Object.keys(result)[0]}
                  dlMbps={result.dlMbps}
                  pingAvg={result.pingAvg}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
