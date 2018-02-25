import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import {
  locations,
  timePeriods,
  formatJsonObject,
  prepareEndpoint,
  offlineApi
} from "../config";

class InputQuestions extends Component {
  render() {
    const selectArray = formatJsonObject(locations);
    const timePeriodArray = formatJsonObject(timePeriods);
    const {
      currentLocation,
      vpnLocation,
      testPeriod,
      handleCurrentChange,
      handleVpnChange,
      handlePeriodClick
    } = this.props;
    return (
      <div className="user-input">
        <div className="current-location">
          <div className="input-question">
            <div>Where are you now?</div>
          </div>
          <div className="input-select">
            <Select
              name="select-box"
              value={currentLocation}
              onChange={handleCurrentChange}
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
              onChange={handleVpnChange}
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
                className={`time-period-select ${
                  period.value === testPeriod ? "selected" : ""
                }`}
                key={period.value}
                onClick={handlePeriodClick}
                id={period.value}
              >
                {period.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

InputQuestions.propTypes = {
  currentLocation: PropTypes.object,
  vpnLocation: PropTypes.object,
  testPeriod: PropTypes.object,
  handleCurrentChange: PropTypes.func.isRequired,
  handleVpnChange: PropTypes.func.isRequired,
  handlePeriodClick: PropTypes.func.isRequired
};

export default InputQuestions;
