const { Order } = require("../model/orderSchema")

const addOrder = async (req, res) => {
    try {

        const { date, productName, quantity, unitPrice, paidAmount } = req.body
        if (!date || !productName || !quantity) {
            return res.status(400).json({ succes: false, message: error.message });
        } else {
            const newOrder = new Order({ date, productName, quantity, unitPrice, paidAmount })
            await newOrder.save()
            return res.status(201).json({ succes: true, message: "Created", data: newOrder })
        }
    } catch (error) {
        return res.status(500).json({ succes: false, message: "Server xatosi", error: error.message })
    }
}
