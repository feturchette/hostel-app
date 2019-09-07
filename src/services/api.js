import axios from "axios";

const api = axios.create({
  baseURL: "https://gist.githubusercontent.com/ruimendesM/"
});

export default api;
