import express from "express";
import multer from "multer";
import { listarPosts, criarNovoPost, carregarImagem, atualizarNovoPost } from "../controllers/postsControllers.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8088",
    optionsSuccessStatus: 200,
};

// Configuração para habilitar o multer para criar pasta no windows e carregar o nome original do arquivo de imagem
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadImage = multer({ dest: "./uploads", storage }); 
// usando linux e max so precisa dessa linha //const uploadImage = multer({dest:"./uploads"}); 

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    app.get("/posts", listarPosts);
    app.post("/posts", criarNovoPost);
    app.post("/upload", uploadImage.single("imagem"), carregarImagem);
    app.put("/upload/:id", atualizarNovoPost);
};

export default routes;