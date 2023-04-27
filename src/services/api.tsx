import axios from 'axios'
// import { useUserContext } from '../providers/UserContext'

// const { token } = useUserContext()

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  // headers: { Authorization: `Bearer ${token}` },
})

export default api
