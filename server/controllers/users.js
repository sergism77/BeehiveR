//this is the users.js in the controllers folder in the server side

import User from '../models/user';

export const getUsers = (req, res) => {
    User.find((err, users) => {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
}

export const createUser = (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save((err) => {
        if (err) {
            err.status = 400;
            res.send(err);
        }
        res.json({ message: 'User created!' });
    });
}

export const updateUser = (req, res) => {
    //print required code:
    console.log('updateUser');
    console.log(req.body);
    console.log(req.params.id);
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    User.update({ _id: req.params.id }, user, (err) => {
        console.log('updateUser');
        console.log(req.body);
        console.log(req.params.id);
        if (err) {
            console.log('updateUser');
            console.log(req.body);
            console.log(req.params.id);
            err.status = 400;

