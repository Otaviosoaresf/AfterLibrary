const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true
    },
    ano: {
        type: String,
        required: true
    },
    categoriaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria", // Relacionamento com a coleção "categorias"
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Video", VideoSchema);