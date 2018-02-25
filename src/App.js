import React, { Component } from "react";
import InputQuestions from "./components/InputQuestions";
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
    this.handleResultView = this.handleResultView.bind(this);
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

  handleResultView() {
    this.setState({ viewingResults: true });
    this.fetchOfflineResults();
  }

  render() {
    const {
      currentLocation,
      vpnLocation,
      testPeriod,
      results,
      viewingResults
    } = this.state;
    const selectArray = formatJsonObject(locations);
    const timePeriodArray = formatJsonObject(timePeriods);
    return (
      <div className="App">
        <div className="navbar">
          <div>Top10VPN</div>
          <div>|||</div>
        </div>
        {!viewingResults ? (
          <div>
            <InputQuestions
              currentLocation={currentLocation}
              vpnLocation={vpnLocation}
              testPeriod={testPeriod}
              handleCurrentChange={this.handleCurrentChange}
              handleVpnChange={this.handleVpnChange}
              handlePeriodClick={this.handlePeriodClick}
            />
            <div
              className="view-results-button"
              onClick={this.handleResultView}
            >
              View results
            </div>
          </div>
        ) : (
          <div>
            <div className="result-input-text">
              <div>
                {`${currentLocation.label} - ${
                  vpnLocation.label
                }, Last ${testPeriod} days`}
              </div>
              <div onClick={() => this.setState({ viewingResults: false })}>
                Change
              </div>
            </div>
            {results &&
              results.map(result => {
                return (
                  <Result
                    key={results[result]}
                    serviceName={results[result]}
                    dlMbps={result.dlMbps}
                    pingAvg={result.pingAvg}
                  />
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
