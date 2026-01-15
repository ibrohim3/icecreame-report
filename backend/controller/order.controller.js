const { Order } = require("../model/orderSchema");

const addOrder = async (req, res) => {
    try {
        const { date, productName, quantity, unitPrice, paidAmount } = req.body;

        // Majburiy maydonlarni tekshirish
        if (!date || !productName || !quantity || !unitPrice) {
            return res.status(400).json({
                success: false,
                message: "Date, productName, quantity va unitPrice majburiy"
            });
        }

        // Order yaratish
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

module.exports = { addOrder };
