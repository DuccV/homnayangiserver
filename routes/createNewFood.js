const createNewFood = require("express").Router()
const multer = require("multer")
const createNewFoodController = require("../controllers/createNewFood")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/img")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "dzai" + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

createNewFood.post("/newfood", upload.single("img"), createNewFoodController)

module.exports = createNewFood