
const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
const session = require('express-session')

const user = {
    username: "bob",
    password: "123", 
    email: "bob@mail.com"
}

app.use(express.static('views'))
// untuk parse urlencode ke object javascript
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: "14653t6eydgghfbhd",
    resave: false,
    saveUninitialized:true,
}))

app.get("/profile", (req, res) =>{
    const username = req.session.userID
    if(username === user.username){
        const html = `
        <h1>
            Profile, ${user.username}
        </h1>
        <ul>
            <li>Email : ${user.email}</li>
        </ul>
        <a href=\'/logout'>click to logout</a>
        `
        res.send(html)

    } else{
        const message = `<h1>Forbidden user</h1>`
        res.send(message)
    }
})

// menangkap data yang dikirim dari form
app.post("/users", (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    // const requestSession = req.sessions
    // if(requestSession.userID === username){
    //     const message = `<h1>Hello, ${requestSession}</h1> Already logged in`
    //     res.send(message)
    // } else 
    if(username===user.username && password === user.password){
        const message = `<h1>Hello, ${req.body.username}</h1>`
        req.session.userID = username
        res.send(message)
    } else{
        const message = `<h1>Unauthenticated User</h1>`
        res.send(message)
    }
})

app.get("/logout", (req, res)=>{
    req.session.destroy()
    res.send("Success!")
})

app.listen(3000, ()=>{
    console.log("App is running on port 3000")
})