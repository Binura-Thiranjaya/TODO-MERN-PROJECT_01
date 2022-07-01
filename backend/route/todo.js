const router = require('express').Router();
const Todo = require('../model/todo');

//add todo
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;
    const createdAt = req.body.createdAt;
    const newTodo = new Todo({
        title,
        description,
        completed,
        createdAt,
    }); 
    newTodo.save().then(() => {
        res.status(200).json({
            message: 'Todo added successfully'
        });
         }).catch((err) => {
            res.status(400).json({
                message: 'Todo added Unsuccessfully ${err}',
            });
    });
});
//get all todos
router.route('/').get((req, res) => {
    Todo.find().then((todos) => {
        res.status(200).json(todos);
    }).catch((err) => {
        res.status(400).json({
            message: 'Todo added Unsuccessfully ${err}',
        });
    });
});
//get todo by id
router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id).then((todo) => {
        res.status(200).json(todo);
    }).catch((err) => {
        res.status(400).json({
            message: 'Todo added Unsuccessfully ${err}',
        });
    });
});
//delete todo
router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id).then((todo) => {
        res.status(200).json({
            message: 'Todo deleted successfully'
        });
    }).catch((err) => {
        res.status(400).json({
            message: 'Todo deleted Unsuccessfully ${err}',
        });
    });
});
//update todo
router.route('/update/:id').put((req, res) => {
    Todo.findById(req.params.id).then((todo) => {
        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.completed = req.body.completed;
        todo.save().then(() => {
            res.status(200).json({
                message: 'Todo updated successfully'
            });
        }).catch((err) => {
            res.status(400).json({
                message: 'Todo updated Unsuccessfully ${err}',
            });
        });
    }).catch((err) => {
        res.status(400).json({
            message: 'Todo updated Unsuccessfully ${err}',
        });
    });
});

    
module.exports = router;