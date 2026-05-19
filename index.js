require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT

app.get("/", (req,res) => {
    res.send("Hello world")
})

app.get("/twitter", (req,res) => {
    res.send("twitter route")
})

app.get("/login", (req,res) => {
    res.send("<h1>please login")
})

app.get("/youtube", (req,res) => {
    res.send("<h1>Youtube route</h1>")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})