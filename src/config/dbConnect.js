import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Dezane:1609@alura.vfb8g.mongodb.net/alura-node");

let db = mongoose.connection

export default db;