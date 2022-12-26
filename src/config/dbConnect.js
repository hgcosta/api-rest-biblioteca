import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@cluster0.kpxbpwu.mongodb.net/cluster0");

let db = mongoose.connection;

export default db;