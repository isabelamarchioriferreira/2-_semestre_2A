const pedidos = require("../../dados/pedidos.json")
const clientes = require("../../dados/clientes.json")
const itens = require("../../dados/itens.json")

const criar = (req, res) => {

    const dados = req.body

    dados.id = Number(pedidos[pedidos.length - 1].id) + 1 //autoIncrement

    pedidos.push(dados)

    res.status(201).json(dados)

}

const listar = (req, res) => {

    comporCliente()
    agregarItens()

    res.json(pedidos)

}

const alterar = (req, res) => {
    const indice = pedidos.findIndex(p => p.id == req.params.id)

    if (indice != -1) {
        pedidos[indice] = {
            ...pedidos[indice],
            ...req.body
        }

        res.json(pedidos[indice])
    } else {
        res.status(404).json("Id não encontrado")
    }
}

const excluir = (req, res) => {
    const indice = pedidos.findIndex(p => p.id == req.params.id)

    if (indice != -1) {
        const removido = pedidos.splice(indice, 1)
        res.json(removido[0])
    } else {
        res.status(404).json("Id não encontrado")
    }
}

function comporCliente() {
    pedidos.forEach(p => {
        p.cliente = clientes.find(c => c.id == p.cliente_id)
    })
}

function agregarItens() {
    pedidos.forEach(p => {
        p.itens = itens.filter(item => item.pedido_id == p.id)
    })
}

module.exports = {
    criar, listar, alterar, excluir
}