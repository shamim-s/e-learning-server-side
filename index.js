const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000 ;

// Called CORS here 
app.use(cors());

const courses = require('./data/data.json');

app.get('/', (req, res) => {
    res.send("E-TUTOR SERVER RUNNING");
})

//1. To get all courses form this api 
app.get('/courses', (req, res) => {
    res.send(courses);
})

//2. To get one single course from this api
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find( course => course.id === id);
    res.send(course);
})

// 3. It just a duplicate api like number 2 for checkout page 
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const course= courses.find( course => course.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log(`E-TUTOR SERVER RUNNING ON PORT ${port}`);
})