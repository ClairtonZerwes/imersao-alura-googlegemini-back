import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    try {
        const db = conexao.db("imersao-alura-nodejs");
        const colecao = db.collection("posts");
        return await colecao.find().toArray();
    } catch (error) {
        console.log("Falha na requisição ", error);
        res.status(404).console.log("Not Found");
        return [];
    }
};

export async function criarPost(novoPost) {
    try {
        const db = conexao.db("imersao-alura-nodejs");
        const colecao = db.collection("posts");
        return await colecao.insertOne(novoPost);
    } catch (error) {
        console.log("Falha na requisição ", error);
        res.status(500).json({"Erro: ": "500 - Fail Server"});
        return [];
    }
};

export async function atualizarPost(id, novoPost) {
    try {
        const db = conexao.db("imersao-alura-nodejs");
        const colecao = db.collection("posts");
        const objectId = ObjectId.createFromHexString(id)
        return await colecao.updateOne({_id: new ObjectId(objectId)}, {$set: novoPost});
    } catch (error) {
        console.log("Falha na requisição ", error);
        res.status(500).json({"Erro: ": "500 - Fail Server"});
        return [];
    }
};