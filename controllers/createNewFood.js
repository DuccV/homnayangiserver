const Food = require("../schema/Food")

const createNewFoodController = async (req, res) => {
    const { name, description, prepare, processing, category } = req.body

    if (!req.file) {
        return res.json({ message: "Thieu anh" })
    }

    if (!name || !description || !prepare || !processing || !category) {
        return res.json({ message: 'Thieu Thong Tin Kia Dcu' })
    }

    const img = req.file.filename

    const newFood = await new Food({
        name: name,
        description: description,
        prepare: prepare,
        category: category,
        processing: processing,
        img: img
    })
    await newFood.save()
    return res.json(newFood)

}

module.exports = createNewFoodController