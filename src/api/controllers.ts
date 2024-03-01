import { Contacts } from "./models/contacts";
import { Request, Response } from 'express'
import { type RowDataPacket } from 'mysql2';
import connection from "./dbConfig";

const getData = (req: Request, res: Response) => {
    const query = 'SELECT * FROM contato;';
    connection.query<RowDataPacket[]>(query, (err: any, result: Contacts[]) => {
        if (err) throw err;
        res.status(200).json(result);
    });
};

const addData = (req: Request, res: Response) => {
    const { nome, email, telefone } = req.body;
    const query = 'INSERT INTO contato (nome, email, telefone) VALUES (?, ?, ?);';
    connection.query<RowDataPacket[]>(query, [nome, email, telefone], (err: any) => {
        if (err) throw err;
        res.send('Dados inseridos com sucesso')
    })
}

const editData = (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, email, telefone } = req.body

    const query = 'UPDATE contato SET nome = ?, email = ?, telefone = ? WHERE id = ?'
    connection.query<RowDataPacket[]>(query, [nome, email, telefone, parseInt(id)], (err: any) => {
        if (err) throw err;
        res.send('Dados atualizados')
    })
}

const deleteData = (req: Request, res: Response) => {
    const { id } = req.params;

    const query = 'DELETE FROM contato WHERE id = ?;';
    connection.query<RowDataPacket[]>(query, [parseInt(id)], (err: any) => {
        if (err) throw err;
        res.send('Contato deletado com sucesso')
    })
}

export { getData, addData, editData, deleteData }