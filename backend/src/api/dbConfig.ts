import mysql from 'mysql2';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'agenda_database'
}

const connection = mysql.createConnection(dbConfig)

export default connection;