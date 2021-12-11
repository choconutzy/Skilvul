const express = require('express')
const app = express()
const Sequelize = require('sequelize')
const TODO_MODEL = require('./models').Todo

const PORT = 3000

app.use(express.json())

app.get('/todos', async (req, res)=>{
    try {
        const todos = await TODO_MODEL.findAll()
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({
            message: error.message || `internal server error`
        })
    }
})

app.get('/todos/:todoId', async (req, res)=>{
    try {
        const { todoId } = req.params;
        const todo = await TODO_MODEL.findOne({
            where: { id: Number(todoId)}
        })
        res.status(200).json(todo)        
    } catch (error) {
        res.status(500).json({
            message: error.message || `internal server error`
        })
    }
})

app.post('/todos', async (req, res)=>{
    try {
        const { title, description, startTime } = req.body;
        const newTodoData = {
            title: title,
            description: description,
            startTime: startTime,
            status: 'false'

        }
        const newTodo = await TODO_MODEL.create(newTodoData)
        res.status(201).json({
            message: 'new todo created',
            todo: newTodo
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || 'internal server error'
        })
    }
})

app.patch('/todos/:todoId', async (req, res)=>{
    try{
        const { todoId } = req.params;
        const { title, description, startTime, status } = req.body;
        const updateTodoData = {
            title: title,
            description: description,
            startTime: startTime,
            status: status

        }
        const updatedTodo = await TODO_MODEL.update(updateTodoData, {
            where: {
                id: todoId
            }
        })
        const todo = await TODO_MODEL.findOne({
            where: { id: Number(todoId)}
        })
        res.status(200).json({
            message: 'update todo success'
            // todo: todo
        })
    } catch(err){
        res.status(500).json({
            message: err.message || 'internal server error'
        })
    }
})

app.delete('/todos/:todoId', async (req, res)=>{
    try {
        const { todoId } = req.params

        await TODO_MODEL.destroy({
            where: {
                id: todoId
            }
        })
        res.status(200).json({
            message: 'delete todo success'
        })
    } catch (error) {
        res.status(500).json({
            message: err.message || 'internal server error'
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running in PORT ${PORT}`)
})