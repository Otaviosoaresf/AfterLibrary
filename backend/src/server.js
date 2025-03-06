require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// Conectar ao banco de dados
connectDB();

// Criar a aplicação Express
const app = express();

app.use(cors()); // ✅ Agora o backend permitirá requisições do frontend

// Middleware para processar JSON
app.use(express.json());

app.use("/api/videos", require("./routes/videoRoutes"));
app.use("/api/categorias", require("./routes/categoriaRoutes"));

// Rota básica para testar o servidor
app.get("/", (req, res) => {
    res.send("Servidor rodando...");
});

// Definir porta do servidor
const PORT = 3000;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
