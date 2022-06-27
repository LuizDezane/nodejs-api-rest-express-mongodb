import mongoose from "mongoose";

const animeSchema = new mongoose.Schema(
    {
    id : {type : String},
    titulo : {type : String, required : true},
    autor : {type : String, required : true},
    editora: {type : String, required : true},
    numeroEpsodios : {type : Number}
    }
);

const animes = mongoose.model('animes', animeSchema);

export default animes;