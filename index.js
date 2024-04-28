require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req,res)=>{
    res.send('About Page')
})

app.get("/login", (req,res)=>{
    res.send('<h1>Login Page</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})