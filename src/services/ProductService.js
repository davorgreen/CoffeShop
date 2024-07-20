import axios from "axios";




const base = axios.create({
    baseURL: 'https://fake-coffee-api.vercel.app/api'
})
export default base;