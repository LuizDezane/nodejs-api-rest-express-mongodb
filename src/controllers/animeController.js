import animes from "../models/Anime.js"

class AnimeController{

    static listarAnimes = (req,res) => {
        animes.find((err, animes) => {
            res.status(200).json(animes);
    }) 
  
    }

}

export default AnimeController