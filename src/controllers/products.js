const ProductsModel = require('../models/products')

async function get(req,res) {
    const {id} = req.params

    let obj = id ? { _id: id} : {} // if ternario (pergunta e resposta na mesma linha, variavel obj tem id? se tiver id cria objeto com _id: id, os dois pontos aseguir é o senao, senão cria obj vazio )

    const products = await ProductsModel.find(obj)
    
    res.send(products)
}

async function post(req, res){
    const {
        name,
        brand,
        price
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price
    })

    product.save()
    
    res.send({
        message: 'succes'
    })
}

module.exports = {
    get,
    post
}

