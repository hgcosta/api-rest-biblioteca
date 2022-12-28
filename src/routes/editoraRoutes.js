// arquivo onde ficará o que vai acontecer de acordo com a requisição e o parametro da rota
import express from 'express';
import EditoraController from '../controllers/editorasController.js';

const router = express.Router();

router
  .get('/editoras', EditoraController.listarEditoras)
  .get('/editoras/:id', EditoraController.listarEditorasId)
  .post('/editoras', EditoraController.cadastrarEditora)
  .put('/editoras/:id' ,  EditoraController.atualizarEditora)
  .delete('/editoras/:id' , EditoraController.deletarEditora);


export default router;