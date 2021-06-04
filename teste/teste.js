const express = require('express')
const app = express()
const { default: axios } = require("axios");

async function testeMethod() {
    const x = await axios.get("http://localhost:3100/pagamentos");
    return x.data
}

app.listen(3000, (req, res) => console.log('a api de testes esta rodando'))

app.get('/test', async (req, res) => {
    const completeList = await testeMethod()
    const optionlist = completeList.map((list) =>{
        return list.nome;
    })
    res.status(200).json(completeList)
})


