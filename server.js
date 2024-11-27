import express from "express";
//import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3030, () => {
    console.log("Servidor Escutando...");
});

function buscarObjetoPostsPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};
