const express = require('express')

const app = express();
const PORT = 8080;


app.get('/', (req, res) => {
    res.send('<h1>Hello from render!</h1>')
})

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})