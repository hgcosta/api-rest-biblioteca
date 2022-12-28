// arquivo onde ficará o que vai acontecer de acordo com a requisição e o parametro da rota
import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
  .get('/livros', LivroController.listarLivros)
  .get('/livros/busca', LivroController.listarLivroPorTipo)
  .get('/livros/:id', LivroController.listarLivroId)
  .post('/livros', LivroController.cadastrarLivro)
  .put('/livros/:id' ,  LivroController.atualizarLivro)
  .delete('/livros/:id' , LivroController.deletarLivro);

export default router;