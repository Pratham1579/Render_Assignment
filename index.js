const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

let todos = [
    {id: "1", todo: "Study"},
    {id: "2", todo: "Play"},
];

let id = 3;

app.get('/', (req, res) => {
    res.send('<h1>Hello from render!</h1>')
})

app.get('/todos', (req, res) => {
    res.json({
        todos
    })
})

app.post('/todos', (req, res) => {
    const {todo} = req.body;
    todos.push({id, todo});
    id++;
    res.json({
        msg: 'added'
    })
})

app.delete('/todo/:id', (req, res) => {
    const {id} = req.params;
    console.log(id)
    todos = todos.filter(todo => todo.id != id)
    res.json({
        msg: 'deleted'
    })
})

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})