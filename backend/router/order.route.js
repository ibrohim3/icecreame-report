const { Router } = require("express")
const route = Router()
const { addOrder, getAll } = require("../controller/order.controller")

route.post("/", addOrder)
route.get("/", getAll)
module.exports = { route }