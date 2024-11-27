import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModels.js";
import gerarDescricaoDeImagemComGemini from "../services/geminiService.js"
import fs from "fs"

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
};

export async function criarNovoPost(req, res) {
    const novoPost = req.body;

    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.log("Erro novo  post.", erro.message);
        res.status(500).json({"Erro: ":"Falha na requisição"});
    };
};

export async function carregarImagem(req, res) {
    //const novoPost = req.body;
    const novoPost = {
        descricao: "",
        url_imagem: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.log("Erro novo  post.", erro.message);
        res.status(500).json({"Erro: ":"Falha na requisição " + erro.message});
    };
};

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImage = `http://localhost:3030/${id}.png`;
    
    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoDeImagemComGemini(imageBuffer);

        const postAlterado = {
            descricao: descricao, //req.body.descricao,
            url_imagem: urlImage,
            alt: req.body.alt,
        };

        const postAtualizado = await atualizarPost(id, postAlterado);
        res.status(200).json(postAtualizado);
    } catch (erro) {
        console.log("Erro novo  post.", erro.message);
        res.status(500).json({"Erro: ":"Falha na requisição " + erro.message});
    };
};