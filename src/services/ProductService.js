import axios from "axios";




const base = axios.create({
    baseURL: 'https://example-data.draftbit.com/products?_limit=18'
})
export default base;