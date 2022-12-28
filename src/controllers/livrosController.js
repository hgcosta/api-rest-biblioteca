// arquivo onde fica todos os metodos de rotas
import livros from "../models/Livro.js";

class LivroController {
    //Listando todos os livros
    static listarLivros = (req, res)=>{
        livros.find()
            .populate('autor')
            .populate('editora', 'nome')
            .exec((err, livros)=>{
                res.status('200').json(livros);
        })
    };
    //Listando livro por id
    static listarLivroId = (req, res)  => {
        const id = req.params.id;
        livros.findById(id)
            .populate('autor', 'nome')
            .populate('editora', 'nome')
            .exec((err, livros)=>{
            if(!err){
                res.status(200).send(livros);
            }else{
                res.status(400).send({message:`${err.message} - Falha ao buscar o livro, verifique o id e tente novamente mais tarde.`});
            }
        })
    }


    //Cadastrando um novo livro
    static cadastrarLivro = (req, res)=>{
        //Criou uma variável livro de new Schema e atribuiu o que veio da requisição
        let livro = new livros (req.body);
        livro.save((err)=>{
            // Verifica se ocorreu um erro e se não salva e envia como um JSON
            if (err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar o livro.`})
            }else{
                res.status(201).send(livro.toJSON());
            }
        });
    };

    //atualizando um livro por id
    static atualizarLivro = (req,res) => {
        const id = req.params.id;
        // Atualizando utilizando a função que verifica pelo id.
        // O $set: é utilizado para setar o que vem no req.body
        livros.findByIdAndUpdate(id,{$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'});
            }else{
                res.status(500).send({message:`${err.message} - Falha ao cadastrar o livro.`})
            }
        })
    };
   
    //Deletar um livro por id
    static deletarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Erro ao deletar o livro`});
            }else{
                res.status(200).send({message: 'Livro deletado com sucesso!'});
            }
        })
    };

    static listarLivroPorTipo = (req, res) => {
        const tipo = req.query.tipo;
        livros.find({"tipo":tipo}, {}, (err, livros) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Erro ao encontrar o livro`});
            }
            else{
                res.status(200).send(livros);
            }
        })
    }
}

export default LivroController;