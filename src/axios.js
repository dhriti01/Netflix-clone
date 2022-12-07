//axios used to send API requests, just like postman
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/" 
  });

//ex: instance.get('foo-bar') will give https://api.themoviedb.org/3/foo-bar

export default instance;