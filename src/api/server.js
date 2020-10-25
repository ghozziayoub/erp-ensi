import axios from "axios"

export default axios.create({
    baseURL: 'https://erp-backend-apis.herokuapp.com'
})