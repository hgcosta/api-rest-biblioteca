// arquivo onde fica todos os metodos de rotas
import autores from "../models/Autor.js";

class AutorController {
    //Listando todos os autores
    static listarAutores = (req, res)=>{
        autores.find((err, autores)=>{
            res.status('200').json(autores);
        })
    };
    //Listando autor por id
    static listarAutorId = (req, res)  => {
        const id = req.params.id;
        autores.findById(id, (err, autores)=>{
            if(!err){
                res.status(200).send(autores);
            }else{
                res.status(400).send({message:`${err.message} - Falha ao buscar o autor, verifique o id e tente novamente mais tarde.`});
            }
        })
    }


    //Cadastrando um novo autor
    static cadastrarAutor = (req, res)=>{
        //Criou uma variável autor de new Schema e atribuiu o que veio da requisição
        let autor = new autores (req.body);
        autor.save((err)=>{
            // Verifica se ocorreu um erro e se não salva e envia como um JSON
            if (err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar o autor.`})
            }else{
                res.status(201).send(autor.toJSON());
            }
        });
    };

    //atualizando um autor por id
    static atualizarAutor = (req,res) => {
        const id = req.params.id;
        // Atualizando utilizando a função que verifica pelo id.
        // O $set: é utilizado para setar o que vem no req.body
        autores.findByIdAndUpdate(id,{$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'autor atualizado com sucesso'});
            }else{
                res.status(500).send({message:`${err.message} - Falha ao cadastrar o autor.`})
            }
        })
    };
   
    //Deletar um autor por id
    static deletarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Erro ao deletar o autor`});
            }else{
                res.status(200).send({message: 'autor deletado com sucesso!'});
            }
        })
    };


}

export default AutorController;