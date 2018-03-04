import React from "react";
import InputQuestions from "../components/InputQuestions";

const InputContainer = ({
  currentLocation,
  vpnLocation,
  testPeriod,
  handleCurrentChange,
  handleVpnChange,
  handlePeriodClick,
  handleResultView
}) => (
  <div>
    <InputQuestions
      currentLocation={currentLocation}
      vpnLocation={vpnLocation}
      testPeriod={testPeriod}
      handleCurrentChange={handleCurrentChange}
      handleVpnChange={handleVpnChange}
      handlePeriodClick={handlePeriodClick}
    />
    <div className="view-results-button-container">
      <div className="view-results-button" onClick={handleResultView}>
        <span className="fa fa-chevron-down" />View Results
      </div>
    </div>
  </div>
);

export default InputContainer;
