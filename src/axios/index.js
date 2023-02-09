import axios from "axios";

const getBaseUrl = () => {
    let url;
    switch(process.env.NODE_ENV) {
      case 'production':
        url = 'https://google.com';
        break;
      case 'development':
      default:
        url = 'http://localhost:8000';
    }
  
    return url;
  }
  
  export default axios.create({
    baseURL: getBaseUrl(),
  });