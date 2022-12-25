import express from 'express';

const app = express();


app.use(express.json());

const livros = [  
    {id:1,  "titulo": "Senhor dos aneis"},
    {id:2, "titulo": "O Hobbit"}
]

// Rota inicial do site
app.get('/', (req, res) =>{
    res.status('200').send('Curso de Node');
});

// Roda de Get do site
app.get('/livros', (req, res) =>{
    res.status('200').json(livros);
});

app.get('/livros/:id', (req, res)=>{
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
} );


//Cadastrando livros
app.post('/livros', (req, res) =>{
    livros.push(req.body);
    res.status('201').send('Livro cadastrado com sucesso');
});

//edita livros
app.put('/livros/:id', (req, res)=>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
} );


app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    let tituloLivro = livros[index].titulo;
    livros.splice(index,1);
    res.send(`O livro ${tituloLivro} removido com sucesso!`)

})

// Busca o livro pelo id
function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}


export default app;