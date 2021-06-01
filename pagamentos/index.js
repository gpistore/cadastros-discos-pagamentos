const express = require('express')
const app = express()
const metodos = [
    {
        id: 1,
        nome: "Boleto",
        desconto: 0.9
    },
    {
        id: 2,
        nome: "Pix",
        desconto: 0.9
    },
    {
        id: 3,
        nome: "Crédito a vista",
        desconto: 0.92
    },
    {
        id: 4,
        nome: "Crédito parcelado",
        desconto: 1
    }
]
app.listen(3100, (req, res) => console.log('a api de pagamentos esta rodando'))

app.get('/pagamentos', (req, res) => {
    res.send(metodos)
})