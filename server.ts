import express from 'express'
import cors from 'cors'
import { addData, deleteData, editData, getData } from "./src/api/controllers";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/contatos', getData);
app.post('/api/contatos', addData);
app.put('/api/:id', editData);
app.delete('/api/:id', deleteData)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
