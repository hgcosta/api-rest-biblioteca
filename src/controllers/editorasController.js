// arquivo onde fica todos os metodos de rotas
import editoras from "../models/Editora.js";

class EditorasController {
    //Listando todos os editoras
    static listarEditoras = (req, res)=>{
        editoras.find((err, editoras)=>{
            res.status('200').json(editoras);
        })
    };
    //Listando autor por id
    static listarEditorasId = (req, res)  => {
        const id = req.params.id;
        editoras.findById(id, (err, editoras)=>{
            if(!err){
                res.status(200).send(editoras);
            }else{
                res.status(400).send({message:`${err.message} - Falha ao buscar o autor, verifique o id e tente novamente mais tarde.`});
            }
        })
    }


    //Cadastrando um novo autor
    static cadastrarEditora = (req, res)=>{
        //Criou uma variável autor de new Schema e atribuiu o que veio da requisição
        let editora = new editoras (req.body);
        editora.save((err)=>{
            // Verifica se ocorreu um erro e se não salva e envia como um JSON
            if (err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar o editora.`})
            }else{
                res.status(201).send(editora.toJSON());
            }
        });
    };

    //atualizando um autor por id
    static atualizarEditora = (req,res) => {
        const id = req.params.id;
        // Atualizando utilizando a função que verifica pelo id.
        // O $set: é utilizado para setar o que vem no req.body
        editoras.findByIdAndUpdate(id,{$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'autor atualizado com sucesso'});
            }else{
                res.status(500).send({message:`${err.message} - Falha ao cadastrar o autor.`})
            }
        })
    };
   
    //Deletar um autor por id
    static deletarEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Erro ao deletar o autor`});
            }else{
                res.status(200).send({message: 'autor deletado com sucesso!'});
            }
        })
    };


}

export default EditorasController;