const Video = require("../models/video");

exports.getVideos = async (req, res) => {
    try {
        const videos = await Video.find().populate("categoriaId", "titulo");
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar videos", error });
    }
};

exports.getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id).populate("categoriaId", "titulo");
        if (!video) return res.status(404).json({ message: "Vídeo não encontrado" });
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar vídeo", error});
    }
};

exports.createVideo = async (req, res) => {
    try {
        const novoVideo = new Video(req.body);
        const videoSalvo = await novoVideo.save();
        
        res.status(201).json(videoSalvo);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar vídeo", error });
    }
};

exports.updateVideo = async (req, res) => {
    try {
        const videoAtualizado = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!videoAtualizado) return res.status(404).json({ message: "Vídeo não encontrado"});
        res.status(200).json(videoAtualizado);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar vídeo", error });
    }
};

exports.deleteVideo = async (req, res) => {
    try {
        const videoRemovido = await Video.findByIdAndDelete(req.params.id);
        if (!videoRemovido) return res.status(404).json({ message: "Vídeo não encontrado" });
        res.status(200).json({ message: "Vídeo deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar vídeo", error });
    }
};
