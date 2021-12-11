const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
     password:"BJUhjP764DGsf",
     database:"impactbyte",
})

connection.connect((err)=>{
    console.log(`connection: error ${err}`)
})



const app = express();
const port = 3000
app.use(express.json())

app.get('/ping', (req,res)=>{
    const status = {
        ready: true
    }
    res.send(status)
})

app.get('/users', (req, res)=>{
    const sqlQuery = `SELECT * FROM user_demo`

    const queryCallback = (err,result) => {
        if(err!=null){
            res.status(500).send({
                message: "server error"
            })
        } else{
            res.send({
                message: "OK",
                data: result
            })
        }
    }
    connection.query(sqlQuery, queryCallback)
})

app.get('/users/:userID', (req, res)=>{

    const params = req.params
    const queryCallback = (err,result) => {
        if(err!=null){
            res.status(500).send({
                message: "server error"
            })
        } else{
            result[0]===undefined || result[0]===null? res.status(404).send({
                message: "User tidak ditemukan"
            }) 
            : res.send({
                message: "OK",
                data: result[0]
            })
        }
    }
    const sqlQuery = `SELECT * FROM user_demo where id= ?;`
    const values = [params.userID]
    connection.query(sqlQuery, values, queryCallback)
})

app.post('/users', (req, res)=>{
    console.log(req.body)
    const sqlQuery = `
    INSERT INTO user_demo(name) value(?)
    `
    const params = req.params
    const queryCallback = (err,result) => {
        if(err!=null){
            res.status(500).send({
                message: "server error"
            })
        } else{
            res.send({
                message: "OK",
                data: result
            })
        }
        const values = [params.userID]
        connection.query(sqlQuery, values, queryCallback)

    }
})

app.listen(port, () =>{
    console.log(`Aplikasi berjalan di port ${port}`)
})