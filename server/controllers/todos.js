//this is the todos.js in the controllers folder

import Todo from '../models/todo';

export const getTodos = (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });
}

export const createTodo = (req, res) => {

    const todo = new Todo({
        text: req.body.text,
        done: false
    });

    todo.save((err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Todo created!' });
    });
}

export const updateTodo = (req, res) => {

    const todo = new Todo({
        text: req.body.text,
        done: req.body.done
    });

    Todo.update({ _id: req.params.id }, todo, (err) => {

        //what do we do with the error?
        if (err) {

            res.send(err);

        }

        res.json({ message: 'Todo updated!' });
    });
}

export const deleteTodo = (req, res) => {
    Todo.remove({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Todo deleted!' });
    });
}

export const clearCompleted = (req, res) => {
    console.log('clearCompleted');
    console.log(req.body);
    console.log(req.params.id);
    Todo.remove({ done: true }, (err) => {
        console.log('clearCompleted');
        console.log(req.body);
        console.log(req.params.id);
        if (err) {