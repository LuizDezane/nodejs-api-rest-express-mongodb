import express from "express";

const app = express();

app.use(express.json())

const livros = [
    {id: 1, "titudo" : "One piece"},
    {id: 2, "titulo": "Naruto"}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node t');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.post('/livros',(req,res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
})

export default app