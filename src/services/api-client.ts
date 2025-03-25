import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f3a5eea03f9f4e9a8ed02dc9f2963ccf",
  },
});
