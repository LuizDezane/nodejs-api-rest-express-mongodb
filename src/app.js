import express from "express";
import db from "./config/dbConnect.js"
import animes from "./models/Anime.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();

app.use(express.json())

routes(app)

// const animes = [
//     {id: 1, titulo : "One piece"},
//     {id: 2, titulo : "Naruto"},
//     {id: 3, titulo : "Hunter x Hunter"},]

app.put('/animes/:id', (req,res)=>{
    let index = buscaAnime(req.params.id);
    animes[index].titulo = req.body.titulo;
    res.json(animes);

})

app.delete('/animes/:id', (req,res)=>{
    let {id} = req.params;
    let index = buscaAnime(id);
    animes.splice(index,1);
    res.send(`Anime ${id} removido com sucesso`);
})

function buscaAnime(id){
    return animes.findIndex(anime => anime.id == id)
}

export default app