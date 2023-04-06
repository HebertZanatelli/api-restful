const router = require('express').Router()

const ProductController = require('../controllers/products')
//VERBOS HTTP (4 TIPOS)
//GET - obter dados
//POST - enviar/receber dados
//PUT - atualizar dados
//DELETE - remover

router.get('/products/:id?', ProductController.get) // ao colocar o :id?, determina para o express, que o parametro id é opcional
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
// router.delete('/products/:id', ProductController.delete)


module.exports = router