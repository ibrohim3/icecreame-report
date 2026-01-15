const { Order } = require("../model/orderSchema");

const addOrder = async (req, res) => {
    try {
        const { date, productName, quantity, unitPrice, paidAmount } = req.body;
        if (!date || !productName || !quantity || !unitPrice) {
            return res.status(400).json({
                success: false,
                message: "Date, productName, quantity va unitPrice majburiy"
            });
        }
        const newOrder = new Order({ date, productName, quantity, unitPrice, paidAmount: paidAmount || 0 });
        await newOrder.save();
        return res.status(201).json({
            success: true,
            message: "Buyurtma yaratildi",
            data: newOrder
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        });
    }
};

const getAll = async (req, res) => {
    try {
        const data = await Order.find({})
        if (!data || data.length === 0) {
            return res.status(404).json({ success: false, message: "Not found" })
        }
        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(500).json({ success: false, message: "server error", error: error.message })
    }
}
module.exports = { addOrder, getAll };
