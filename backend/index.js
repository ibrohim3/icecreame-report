const express = require("express")
const { connect } = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const main = express()
main.use(cors())
main.use(express.json())
const URL = process.env.MONGO_URL
async function connetToDB() {
    try {
        await connect(URL)
        console.log("DB ga ulandi.");
    } catch (error) {
        console.error("DB ga ulanishda xaotilk yuz berdi: ", error.message);
    }
}
connetToDB()

const PORT = process.env.PORT || 8000
main.listen(PORT, () => {
    console.log(`Server shu portda ishga tushdi http://localhost:${PORT}`);
})