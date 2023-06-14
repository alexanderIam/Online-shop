const { BasketDevice, Basket } = require('../models/models')

class CartController{

    async create(req, res) {
        const userId = req.user.id
        const { deviceId } = req.body
        const basket = await Basket.findOne({where:{userId}})
        const cart = await BasketDevice.create({deviceId, basketId:basket.id})
        
        return res.json(cart)
    }

    async getAll(req, res) {
        const userId = req.user.id
        const basket = await Basket.findOne({where:{userId}})
        const carts = await BasketDevice.findAll({where:{basketId:basket.id}})
        
        return res.json(carts)
    }

}

module.exports = new CartController()
