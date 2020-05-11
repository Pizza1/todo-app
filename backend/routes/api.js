const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/todos', (req, res,next)=>{
    Todo.find({})
    .then(data=>res.json(data))
    .catch(next);
});

router.post('/todos', (req,res,next)=>{
    if(req.body.action){
        
        Todo.create(req.body)
        .then(data=>res.json(data))
        .catch(next);
    }else{
        res.json({
            error: "The input field is empty"
        });
    }
}); 

router.delete('/todos/:id', (req, res,next)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(data=>res.json(data))
    .catch(next);
});

router.patch('/todos/:id', (req,res,next)=>{
    console.log(req.body);
    Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(data=>res.json(data))
    .catch(next);
    //console.log("ABCDSFSDFSDF")
});

module.exports = router;