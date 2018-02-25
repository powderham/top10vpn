import React from "react";

const Result = ({ serviceName, dlMbps, pingAvg }) => {
  return (
    <div className="result-container">
      <div className="result-header">
        <div className="result-logo" />
        <div className="result-name">{serviceName}</div>
      </div>
      <div className="result-details">
        <div className="result-detail">
          <div className="result-detail-title">Period</div>
          <div className="result-detail-data">Example data</div>
        </div>
        <div className="result-detail">
          <div className="result-detail-title">Download Speed</div>
          <div className="result-detail-data">{dlMbps}</div>
        </div>
        <div className="result-detail">
          <div className="result-detail-title">Ping time</div>
          <div className="result-detail-data">{pingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
