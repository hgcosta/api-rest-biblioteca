import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
    {
        id:{type:String},
        titulo:{type:String, required:true},
        autor:{type:String, required:true},
        editora:{type:String, required:true},
        numeroPaginas:{type:Number}

    }
);


// Criação de livros model com o padrão de livroSchema.
const livros = mongoose.model('livros', livroSchema);

export default livros;