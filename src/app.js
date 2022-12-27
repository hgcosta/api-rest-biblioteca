// extansia as rotas pelo express
import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'Error de conexão com o BD'));
db.once("open", ()=>{console.log('A conexão com o banco feita com sucesso')});

const app = express();

app.use(express.json());

routes(app);

export default app;