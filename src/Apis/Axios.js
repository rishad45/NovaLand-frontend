import axios from 'axios'

// const BASE_URL = 'http://localhost:5000'
const BASE_URL = 'https://novaland.futurestore.website'

export default axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'Content-Type' : 'application/json'},
    withCredentials: true 
  });

export const axiosPrivate = axios.create({ 
  baseURL : BASE_URL,
  headers : {'Content-Type' : 'application/json'},
  withCredentials : true
}) 

export const axioswithMedia = axios.create({
  baseURL : BASE_URL,
  headers : {
    'Content-Type' : 'multipart/form-data'
  },
  withCredentials : true
})







