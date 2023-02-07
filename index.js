const express = require('express')
const app = express()
const port = 8080
const {v4} = require('uuid')

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

