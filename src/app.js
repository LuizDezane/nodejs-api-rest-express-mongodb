import express from "express";
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();

app.use(express.json())

const animes = [
    {id: 1, titulo : "One piece"},
    {id: 2, titulo : "Naruto"},
    {id: 3, titulo : "Hunter x Hunter"},
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node t');
})

app.get('/animes', (req, res) => {
    res.status(200).json(animes);
})

app.post('/animes',(req,res) => {
    animes.push(req.body);
    res.status(201).send("Anime cadastrado com sucesso")
})

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