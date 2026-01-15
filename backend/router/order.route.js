const { Router } = require("express")
const route = Router()
const { addOrder } = require("../controller/order.controller")

route.post("/", addOrder)

module.exports = { route }