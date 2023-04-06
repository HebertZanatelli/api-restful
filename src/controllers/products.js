const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    let obj = id ? { _id: id } : {} // if ternario (pergunta e resposta na mesma linha, variavel obj tem id? se tiver id cria objeto com _id: id, os dois pontos aseguir é o senao, senão cria obj vazio )

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
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

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })

    // const product = await ProductsModel.findOne({ _id:id })

    // await product.updateOne(req.body)

    res.send({
        message: 'success',
        product,
    })
}
module.exports = {
    get,
    post,
    put
}

