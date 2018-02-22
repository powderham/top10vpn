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

export const prepareEndpoint = (src, dest, tpd) =>
  `https://perfapi.perf-data-api.top10vpn-data.prod.top10vpn.co/sdata/results?src=${src}&dest=${dest}&tpd=${tpd}`;

export const offlineApi = {
  expressvpn: {
    src: "lon",
    dest: "nyc",
    pingAvg: 69,
    displayName: "ExpressVPN",
    dlMbps: 21.7773
  },
  hidemyass: {
    src: "lon",
    dest: "nyc",
    pingAvg: 71,
    displayName: "HideMyAss",
    dlMbps: 17.5002
  },
  ipvanish: {
    src: "lon",
    dest: "nyc",
    pingAvg: 76,
    displayName: "IPVanish",
    dlMbps: 12.0001
  },
  nordvpn: {
    src: "lon",
    dest: "nyc",
    pingAvg: 71,
    displayName: "NordVPN",
    dlMbps: 34.9609
  },
  purevpn: {
    src: "lon",
    dest: "nyc",
    pingAvg: 73,
    displayName: "PureVPN",
    dlMbps: 24.25
  }
};
