const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Got a GET request')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/', (req, res) => {
    res.send('Got a PUT request')
})

app.delete('/', (req, res) => {
    res.send('Got a DELETE request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
