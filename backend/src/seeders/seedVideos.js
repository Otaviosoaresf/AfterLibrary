require("dotenv").config();
const mongoose = require("mongoose");
const Video = require("../models/video");
const Categoria = require("../models/categoria");
const connectDB = require("../config/db");

const seedVideos = async () => {
    try {
        await connectDB();

        // Buscar todas as categorias do banco
        const categorias = await Categoria.find();
        if (categorias.length === 0) {
            console.log("Nenhuma categoria encontrada. Execute primeiro o seed de categorias.");
            mongoose.connection.close();
            return;
        }

        // Criar um dicionário para mapear categorias pelo título
        const categoriaMap = {};
        categorias.forEach(categoria => {
            categoriaMap[categoria.titulo] = categoria._id;
        });

        // Definir os vídeos com os IDs corretos das categorias
        const videos = [
            {
                titulo: "Mau P Live @ EDC Las Vegas 2024 - Kinetic Field",
                url: "https://www.youtube.com/embed/WEcImcXf6C0",
                ano: "2024",
                categoriaId: categoriaMap["Tech-House"]
            },
            {
                titulo: "Ace Ventura @ Ozora Festival 2023 [full set movie]",
                url: "https://www.youtube.com/embed/l82cnAU-8a8",
                ano: "2023",
                categoriaId: categoriaMap["Fullon"]
            },
            {
                titulo: "Blazy @ Universo Paralello 23/24 (Full Set Movie)",
                url: "https://www.youtube.com/embed/iKr5nhr2mz8",
                ano: "2024",
                categoriaId: categoriaMap["Progressive Trance"]
            },
            {
                titulo: "Charlotte de Witte at Ultra 2023 (Main Stage)",
                url: "https://www.youtube.com/embed/IDp8e3rDaQA",
                ano: "2023",
                categoriaId: categoriaMap["Techno"]
            },
            {
                titulo: "ANYMA presents GENESYS, 2024 (FULL SET) MIX - AfterLife | Tale Of Us - PREMIERE",
                url: "https://www.youtube.com/embed/GyfW1_EDKK0",
                ano: "2024",
                categoriaId: categoriaMap["Techno-Melodico"]
            },
            {
                titulo: "Cloonee - Live at The Brooklyn Mirage 2024",
                url: "https://www.youtube.com/embed/inNpBt8AJ54",
                ano: "2024",
                categoriaId: categoriaMap["Tech-House"]
            },
            {
                titulo: "Eli Brown @ EDC Las Vegas 2024 | (stereoBLOOM)",
                url: "https://www.youtube.com/embed/NF5BTkhu30o",
                ano: "2024",
                categoriaId: categoriaMap["Techno"]
            },
            {
                titulo: "Vegas @ Universo Paralello Festival #17 2024 FULL VIDEO",
                url: "https://www.youtube.com/embed/91MYtYAHKLs",
                ano: "2024",
                categoriaId: categoriaMap["Progressive Trance"]
            },
            {
                titulo: "Astrix @ Boom Festival 2023 (Full Set Movie)",
                url: "https://www.youtube.com/embed/kdVElRhr4q4",
                ano: "2023",
                categoriaId: categoriaMap["Fullon"]
            },
            {
                titulo: "Korolova DJ set ‪@sotrackboa‬ 2024 | São Paulo | ‪@beatport‬ live",
                url: "https://www.youtube.com/embed/c7Gzu83cLQU",
                ano: "2024",
                categoriaId: categoriaMap["Techno-Melodico"]
            },
            {
                titulo: "Gabe | Live at Só Track Boa Festival 2024, São Paulo - SP",
                url: "https://www.youtube.com/embed/JngOKfHUqo0",
                ano: "2024",
                categoriaId: categoriaMap["Tech-House"]
            }
        ];

        await Video.deleteMany(); // Apagar vídeos antigos
        await Video.insertMany(videos);
        console.log("Vídeos inseridos com sucesso!");
        mongoose.connection.close();
    } catch (error) {
        console.error("Erro ao inserir vídeos:", error);
        process.exit(1);
    }
};

seedVideos();
