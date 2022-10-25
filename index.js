const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());

const courses = require('./data/data.json');

app.get('/', (req, res) => {
    res.send("E-TUTOR SERVER RUNNING");
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find( course => course.id === id);
    res.send(course);
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const item= courses.find( course => course.id === id);
    res.send(item);
})

app.listen(port, () => {
    console.log(`E_TUTOR SERVER RUNNING ON PORT ${port}`);
})