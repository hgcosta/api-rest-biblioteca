// arquivo onde ficará o que vai acontecer de acordo com a requisição e o parametro da rota
import express from 'express';
import AutorController from '../controllers/autoresController.js';

const router = express.Router();

router
  .get('/autores', AutorController.listarAutores)
  .get('/autores/:id', AutorController.listarAutorId)
  .post('/autores', AutorController.cadastrarAutor)
  .put('/autores/:id' ,  AutorController.atualizarAutor)
  .delete('/autores/:id' , AutorController.deletarAutor);


export default router;