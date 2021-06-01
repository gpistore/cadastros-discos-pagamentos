const { default: axios } = require("axios");


const pagamentos = axios.get("http://localhost:3100/pagamentos")
    
console.log(pagamentos)
