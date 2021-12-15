// Import package
const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
const session = require('express-session')
const jwt = require('jsonwebtoken')
const users = require('./users');
const dotenv = require("dotenv").config();

const PORT = 8000

app.use(cookieParser())

app.use(express.json())
app.use(express.static('views')) //connect app.js & index.html
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: String(process.env.SECRET),
    resave: false,
    saveUninitialized:true,
}))


app.get('/user', (req, res) =>{
    const username = req.session.userID
    const user = users.find((o) => o.username === username);
    if(user){
        const html = `
        <h1>
            Profile, ${username}
        </h1>
        <a href="/logout">click to logout</a>
        `
        res.send(html)
    } else{
        const message = `<h1>Forbidden user</h1>`
        res.send(message)
    }
})

app.post('/login', (req, res) =>{
    const { username, password } = req.body;
    const user = users.find((o) => o.username === username && password === o.password);
    if (!user) {
      res.status(400).send({ error: "user or password invalid" });
      return
    }
    req.session.userID = username
    const jwtPayload = {
      sub: user.username,
      iss: "mini-service",
      iat: new Date().getTime() / 1000,
      exp: (new Date().getTime() / 1000) + 3600
    }
    
    const token = jwt.sign(jwtPayload, process.env.TOKEN_SECRET);
    res.send({ accessToken: token });
})

app.get("/logout", (req, res)=>{
    req.session.destroy()
    res.send("Success!")
})

app.listen(PORT, (req, res) =>{
    console.log(`Server is running on  ${PORT}`)
})