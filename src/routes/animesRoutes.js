import express from "express";
import AnimeController from "../controllers/animeController.js"

const router = express.Router();

router
  .get("/animes", AnimeController.listarAnimes)
  .get("/animes/:id", AnimeController.listarAnimesPorId)
  .post("/animes", AnimeController.cadastrarAnime)
  .put("/animes/:id", AnimeController.atualizarAnime)
  .delete("animes/:id", AnimeController.deletarAnime)

export default router;