const http = require('http');
const port = 3000;


const rotas = {
    '/': 'Curso de Node',
    '/livros':'Página Livros',
    '/autores':'Listagem de autores',
    '/editora': 'Editora',
}


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});


server.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});