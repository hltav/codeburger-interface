import axios from 'axios'

const apiCodeburger = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiCodeburger
