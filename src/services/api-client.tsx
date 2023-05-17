import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.api-ninjas.com",
  headers: {
    "X-Api-Key": "4wOcQYopJokN/dSxdRVOdA==WAiSCZxLYr16nbfm",
    accept: "application/json",
  },
  //   contentType: 'application/json',
});

export { CanceledError };
