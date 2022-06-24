import express from "express";
import animes from "./animesRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo : "Curso de node"})
    })

    app.use(
        express.json(),
        animes
    )
}

export default routes;