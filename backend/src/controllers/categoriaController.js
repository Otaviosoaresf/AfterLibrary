const Categoria = require("../models/categoria");

exports.getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar videos", error });
    }
};

exports.getCategoriaById = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id);
        if (!categoria) return res.status(404).json({ message: "Categria não encontrada." });
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar categoria", error });
    }
};

exports.createCategoria = async (req, res) => {
    try {
        console.log("Recebendo dados no POST /api/categorias:", req.body); // 🔍 Log para testar se o servidor recebe os dados corretamente
        const novaCategoria = new Categoria(req.body);
        const categoriaSalva = await novaCategoria.save()
        console.log("Categoria salva com sucesso:", categoriaSalva); // 🔍 Log para ver se foi salvo
        res.status(201).json(categoriaSalva);
    } catch (error) {
        console.error("Erro ao criar categoria:", error); // 🔥 Agora o erro aparecerá no console
        res.status(500).json({ message: "Erro ao criar categoria", error });
    }
};

exports.updateCategoria = async (req, res) => {
    try {
        const categoriaAtualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!categoriaAtualizada) return res.status(404).json({ message: "Cateogria não encontrada." });
        res.status(200).json(categoriaAtualizada);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar categoria", error })
    }
};

exports.deleteCategoria = async (req, res) => {
    try {
        const categoriaRemovida = await Categoria.findByIdAndDelete(req.params.id);
        if (!categoriaRemovida) return res.status(404).json({ message: "Categoria não encontrada" });
        res.status(200).json({ message: "Categoria deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar categoria", error });
    }
}