const mysql = require("mysql2/promise");


const getDbConnection = async () => {
    // create the connection to database
    try {
        return await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DB,
            password: process.env.MYSQL_PASSWORD,
        });
    } catch (error) {
        throw error;
    }
}

module.exports.getQueryResults = async (query, values = []) => {
    try {
        const connection = await getDbConnection();
        const [data] = await connection.execute(query, values);
        connection.end();
        return data;
    } catch (error) {
        throw error;
    }
}