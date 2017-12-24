import express from 'express'
import bodyParser from 'body-parser'
const app = new express()
const PORT = 3000

app.use(bodyParser.json())
app.get('/', (req, res) => { res.send('Hello World') })

app.listen(PORT)

console.log(`Service is running on port ${PORT}.`)