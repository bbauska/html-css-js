/* 
PLACE CHALLENGE CODE IN HERE FOR BACKEND

*/

/* 
DEV ENVIRONMENT SETUP

npm init
npm install http-server --save --g
npm install express --save
*/

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

/* 
USE DATA STRUCTURES TO ENSURE DATA PERSISTENCE

*/

let submissions = [

];



app.get('/', (res) => {
    res.send(`FUNDAMENTALS OF WEB DEVELOPMENT | CRUD`)
})

app.get('/submissions', (res) => {
    res.json(submissions)
})

app.get('/submissions/:id', (res) => {
    const id = req.params.id;
    res.json(submissions[id])
})

app.post('/submission', (req, res) => {
    submissions.push(req.body);
    res.json(submissions[submissions.length - 1]);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})