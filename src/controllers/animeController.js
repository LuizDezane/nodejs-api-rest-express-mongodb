import animes from "../models/Anime.js"

class AnimeController{

    static listarAnimes = (req,res) => {
        animes.find((err, animes) => {
            res.status(200).json(animes);
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
}

export default AnimeController