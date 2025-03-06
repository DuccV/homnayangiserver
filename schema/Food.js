const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Food = new Schema({
    //Tên món
    name: {
        type: String,
        required: true
    },
    //Phân loại
    category: {
        type: [String],
        required: true
    },
    //Mô tả
    description: {
        type: String
    },
    //Chuẩn bị nguyên liệu
    prepare: {
        type: [String],
        required: true
    },
    //Cách chế biến
    processing: {
        type: String,
        required: true
    },
    //Ảnh minh họa
    img: {
        type: String,
        required: true
    }
})

const md = mongoose.model("Food", Food)
module.exports = md