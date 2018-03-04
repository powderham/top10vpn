import React from "react";
import Result from "../components/Result";

const ResultContainer = ({
  currentLocation,
  vpnLocation,
  results,
  testPeriod
}) => (
  <div>
    <div className="result-input-text">
      <div>
        {`${currentLocation.label} - ${
          vpnLocation.label
        }, Last ${testPeriod} days`}
      </div>
      <div
        className="change-input"
        onClick={() => this.setState({ viewingResults: false })}
      >
        Change
      </div>
    </div>
    <div className="result-container">
      {results ? (
        results.map(result => {
          return (
            <Result
              key={results.displayName}
              displayName={result.displayName}
              dlMbps={result.dlMbps}
              pingAvg={result.pingAvg}
            />
          );
        })
      ) : (
        <div>
          <span className="fa fa-circle-notch" />
          Loading
        </div>
      )}
    </div>
  </div>
);

export default ResultContainer;
