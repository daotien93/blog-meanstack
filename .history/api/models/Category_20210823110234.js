const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema(
    {
        name: {
            
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema)

