const express = require("express");
const app = express();

//localhost:3000/
app.get("/", (req, res) => {
    res.status(200).json({
        message: "GET - root",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        }
    })
})

//get localhost:3000/test/45
app.get('/:id/45', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'GET - SUCCESS',
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
            message: "nice, it works",
        }
    })
})

//patch localhost:3000/test/89
app.patch('/:id/89', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "PATCH - SUCCESS",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
            message: "patch method is working"
        }
    })
})

//delete localhost:3000/test/9
app.delete("/:id/9", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "DELETE - SUCCESS",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
            message: "delete method is working"
        }
    })
})

//get localhost:3000/test
app.get("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: `GET ${id} - SUCESS`,
        id: id,
        metadata:{
            hostname: req.hostname,
            method: req.method,
            message: 'get method is working'
        }
    })
})

//post localhost:3000/test
app.post("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: "POST - SUCCESFUL",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
            message: "post method is working"
        }
    })
})
module.exports = app;