//this is the user.js in the models folder in the server side
//we use mysql to create the database and table

//we use sequelize to create the model

import Sequelize from 'sequelize';
import db from '../config/db';

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default User;

