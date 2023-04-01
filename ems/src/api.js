import axios from "axios";

const http = axios.create({
  baseURL: "https://shantanu-ems.vercel.app/",
});

export default http;
