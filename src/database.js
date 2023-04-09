//this is the database connection file in the src folder

import mariadb from 'mariadb';
import config from 'config.json';
const dbConfig = config.database;
let pool = mariadb.createPool(dbConfig);
export default pool;


