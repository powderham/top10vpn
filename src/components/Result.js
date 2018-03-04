import React from "react";
import "../styles/css/Result.css";

const Result = ({ displayName, dlMbps, pingAvg }) => {
  return (
    <div className="result">
      <div className="result-header">
        <div className="result-logo" />
        <div className="result-name">{displayName}</div>
      </div>
      <div className="result-details">
        <div className="result-detail">
          <div className="result-detail-title">Period</div>
          <div className="result-detail-data">Example data</div>
        </div>
        <div className="result-detail">
          <div className="result-detail-title">Download Speed</div>
          <div className="result-detail-data">
            <span className="speed-detail">{dlMbps.toFixed(1)}</span>
            <span className="speed-unit">Mb</span>
          </div>
        </div>
        <div className="result-detail">
          <div className="result-detail-title">Ping time</div>
          <div className="result-detail-data">
            <span className="speed-detail">{pingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
