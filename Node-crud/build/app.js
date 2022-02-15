"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
//Endpoint to fetch user details
app.get('/user/Id/:id/Name/:name', (req, res) => {
    //   let queryParam = req.query;
    //   console.log(queryParam);
    //   res.json(queryParam)
    res.send({
        message: 'Hello World',
        data: req.params.id,
        name: req.params.name
    });
});
// Endpoint to post data
app.post('/user/Id/:id/Name/:name', (req, res) => {
    res.send({
        data: req.body,
        params: {
            id: req.params.id,
            name: req.params.name
        }
    });
});
app.put('/user/Id/:id/Name/:name', (req, res) => {
    res.send({
        data: req.body,
        params: {
            id: req.params.id,
            name: req.params.name
        }
    });
});
app.delete('/user/Id/:id/Name/:name', (req, res) => {
    res.send({});
});
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
