const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Food = require("./schema/Food")
const createFood = require("./routes/createNewFood")

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))
app.use("/food", createFood)

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

//main
app.get("/", async (req, res) => {
    const foods = await Food.find()
    res.json(foods)
})

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Ngon");

        })
    })