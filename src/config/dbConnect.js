import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@cluster0.kpxbpwu.mongodb.net/node-biblioteca");

let db = mongoose.connection;

export default db;