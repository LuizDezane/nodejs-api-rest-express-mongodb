import animes from "../models/Anime.js"

class AnimeController{

    static listarAnimes = (req,res) => {
        animes.find((err, animes) => {
            res.status(200).json(animes);
    }) 
    }
    static listarAnimesPorId = (req, res) => {
        const id = req.params.id;

        animes.findById(id, (err, animes) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do anime não localizado.`})
            } else {
                res.status(200).send(animes);
            }

        })
    }
    static cadastrarAnime = (req, res) => {
        let anime = new animes(req.body);

        anime.save((err)=> {

            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar anime.`})
            } else{
                res.status(201).send(anime.toJSON())
            }
        })
    }
    static atualizarAnime = (req, res) => {
        const id = req.params.id;

        animes.findByIdAndUpdate(id, {$set: req.body},(err) => {
            if(!err){
                res.status(200).send({message: 'Anime atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })

    }
    static deletarAnime = (req, res) => {
        const id = req.params.id;

        animes.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'O anime foi removido '})
            } else {
                res.status(500).send({message : err.message })
            }
        })
    }


}

export default AnimeController