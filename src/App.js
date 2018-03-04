import React, { Component } from "react";
import InputQuestions from "./components/InputQuestions";
import ResultContainer from "../src/containers/ResultContainer";
import {
  locations,
  timePeriods,
  formatJsonObject,
  prepareEndpoint,
  offlineApi
} from "./config";
import Result from "./components/Result";
import "../src/styles/css/index.css";

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
        .then(response => {
          return [
            ...Object.keys(response)
              // Get an array of object from the object of objects
              .map(result => response[result])
          ];
        })
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

  async handleResultView() {
    this.setState({ loading: true });
    await this.fetchResults();
    this.setState({ viewingResults: true, loading: false });
  }

  render() {
    const {
      currentLocation,
      vpnLocation,
      testPeriod,
      results,
      loading,
      viewingResults
    } = this.state;
    const selectArray = formatJsonObject(locations);
    const timePeriodArray = formatJsonObject(timePeriods);
    return (
      <div className="App">
        <div className="navbar">
          <div>Top10VPN</div>
          <div>
            <i className="fa fa-bars" />
          </div>
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
            <div className="view-results-button-container">
              <div
                className="view-results-button"
                onClick={this.handleResultView}
              >
                <span className="fa fa-chevron-down" />View Results
              </div>
            </div>
          </div>
        ) : (
          <ResultContainer
            currentLocation={currentLocation}
            vpnLocation={vpnLocation}
            results={results}
            testPeriod={testPeriod}
          />
        )}
      </div>
    );
  }
}

export default App;
