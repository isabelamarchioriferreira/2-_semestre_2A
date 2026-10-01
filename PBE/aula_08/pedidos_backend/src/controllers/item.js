const itens = require("../../dados/itens.json")
const produtos = require("../../dados/produtos.json")

// Composição
function comporProduto() {
    itens.forEach(item => {
        item.produto = produtos.find(p => p.id == item.produto_id)
    })
}

// Calcula o subtotal
function calcSubtotal() {
    itens.forEach(item => {
        item.subtotal = item.preco * item.quantidade
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(itens[itens.length - 1].id) + 1
    itens.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    comporProduto()
    calcSubtotal()
    res.json(itens)
}

const alterar = (req, res) => {
    const indice = itens.findIndex(i => i.id == req.params.id)

    if (indice != -1) {
        itens[indice] = {
            ...itens[indice],
            ...req.body
        }
        res.json(itens[indice])
    } else {
        res.status(404).json("Id não encontrado")
    }
}

const excluir = (req, res) => {
    const indice = itens.findIndex(i => i.id == req.params.id)

    if (indice != -1) {
        const removido = itens.splice(indice, 1)
        res.json(removido[0])
    } else {
        res.status(404).json("Id não encontrado")
    }
}

module.exports = {
    criar, listar, alterar, excluir
}