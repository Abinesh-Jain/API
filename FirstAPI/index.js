const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

var users = [
    { id: 1, name: "User 01" },
    { id: 2, name: "User 02" },
    { id: 3, name: "User 03" },
    { id: 4, name: "User 04" },
    { id: 5, name: "User 05" },
    { id: 6, name: "User 06" },
    { id: 7, name: "User 07" },
    { id: 8, name: "User 08" },
    { id: 9, name: "User 09" },
    { id: 10, name: "User 10" },
    { id: 11, name: "User 11" },
    { id: 12, name: "User 12" },
    { id: 13, name: "User 13" },
    { id: 14, name: "User 14" },
    { id: 15, name: "User 15" },
    { id: 16, name: "User 16" },
    { id: 17, name: "User 17" },
    { id: 18, name: "User 18" },
    { id: 19, name: "User 19" },
    { id: 20, name: "User 20" },
]

app.use(express.json());
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/users', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const id = users.length + 1;
    users.push({
        id: id,
        name: name
    })
    res.send(users)
})

app.get("/users", (req, res) => {
    res.send(users.filter(n => n));
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    if (id <= users.length && id > 0) {
        res.send(users[id - 1]);
    } else {
        res.send("No record");
    }
});

app.put('/users/:id', (req, res) => {
    users[req.params.id - 1].name = "Updated";
    res.send(users);
})

app.delete('/users/:id', (req, res) => {
    delete users[req.params.id - 1];
    res.send(users.filter(n => n));
})

app.listen(port, () => console.log("3000 working"))