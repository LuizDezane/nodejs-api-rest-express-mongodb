import express from "express";
import AnimeController from "../controllers/animeController.js"

const router = express.Router();

router
  .get("/animes", AnimeController.listarAnimes)
  .post("/animes", AnimeController.cadastrarAnime)

export default router;