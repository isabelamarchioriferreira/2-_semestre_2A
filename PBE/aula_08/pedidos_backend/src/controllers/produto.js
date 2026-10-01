const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body

    dados.id = Number(produtos[produtos.length - 1].id) + 1

    produtos.push(dados)

    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(produtos)
}

const alterar = (req, res) => {
    const indice = produtos.findIndex(p => p.id == req.params.id)

    if (indice != -1) {
        produtos[indice] = {
            ...produtos[indice],
            ...req.body
        }

        res.json(produtos[indice])
    } else {
        res.status(404).json("Id não encontrado")
    }
}

const excluir = (req, res) => {
    const indice = produtos.findIndex(p => p.id == req.params.id)

    if (indice != -1) {
        const removido = produtos.splice(indice, 1)
        res.json(removido[0])
    } else {
        res.status(404).json("Id não encontrado")
    }
}

module.exports = {
    criar, listar, alterar, excluir
}