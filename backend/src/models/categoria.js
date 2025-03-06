const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Categoria", CategoriaSchema);