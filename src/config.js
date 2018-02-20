export const locations = {
  fra: "France",
  lon: "London",
  nyc: "New York",
  sfo: "San Fransisco",
  sgp: "Singapore",
  syd: "Sydney"
};

export const timePeriods = {
  0: "Right now",
  7: "Last 7 days",
  14: "Last 14 days"
};

export const formatJsonObject = object =>
  Object.keys(object).map(obj => {
    return {
      value: obj,
      label: object[obj]
    };
  });
