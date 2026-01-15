const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    date: { type: Date, required: true },
    productName: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true, min: 0 },
    totalAmount: { type: Number, min: 0 },
    paidAmount: { type: Number, required: true, min: 0 },
    balance: { type: Number, min: 0 }
}, { timestamps: true })

orderSchema.pre("save", async function () {
    this.totalAmount = this.quantity * this.unitPrice;
    this.balance = this.totalAmount - this.paidAmount;
});


const Order = model("Order", orderSchema)
module.exports = { Order }