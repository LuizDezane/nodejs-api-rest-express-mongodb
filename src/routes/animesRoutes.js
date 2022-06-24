import express from "express";
import AnimeController from "../controllers/animeController.js"

const router = express.Router();

router
  .get("/animes", AnimeController.listarAnimes)

export default router;