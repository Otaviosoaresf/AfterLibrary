require("dotenv").config();

const mongoose = require("mongoose");
const Categoria = require("../models/categoria");
const connectDB = require("../config/db");

const categorias = [
    {

        "titulo": "Todas"
    },
    {
        "titulo": "Tech-House"
    },
    {
        "titulo": "Fullon"
    },
    {
        "titulo": "Progressive Trance"
    },
    {
        "titulo": "Techno"
    },
    {
        "titulo": "Techno-Melodico"
    }
];

const seedDatabase = async () => {
    try {
        await connectDB();
        await Categoria.deleteMany();
        await Categoria.insertMany(categorias);
        console.log("Dados inseridos com sucesso!");
        mongoose.connection.close();
    } catch (error) {
        console.error("Erro ao inserir os dados:", error)
        process.exit(1)
    }
}

seedDatabase();