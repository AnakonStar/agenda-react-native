import axios from "axios";
import { Contacts } from "models/contacts";

//Criar um arquivo com o ip - arquivo de configuração

const fetchContatos = async (setData: any) => {
    try {
        const response = await axios.get<Contacts[]>('http://localhost:5000/api/contatos')

        setData(response.data)
    } catch (error) {
        console.error('Erro ao puxar os dados', error)
    }
}

type dbContact = {
    email: string,
    nome: string,
    telefone: string
}

const addContato = async (nome: string, email: string, telefone: string) => {
    try {
        const response = await axios.post<dbContact>('http://localhost:5000/api/contatos', {
            email,
            nome,
            telefone
        })

        console.log(response.data)
    } catch (error) {
        console.error('Erro ao inserir dados')
    }
}

const editContato = async (nome: string, email: string, telefone: string, id: string) => {
    try {
        const response = await axios.put<dbContact[]>(`http://localhost:5000/api/${id}`, {
            email,
            nome,
            telefone
        })

        console.log(response.data)
    } catch (error) {
        console.error('Erro ao atualizar dados', error)
    }
}

const deleteContato = async (id: string) => {
    try {
        const response = await axios.delete<dbContact[]>(`http://localhost:5000/api/${id}`)

        console.log(response.data)
    } catch (error) {
        console.error('Erro ao deletar dados', error)
    }
}

export { fetchContatos, addContato, editContato, deleteContato }
