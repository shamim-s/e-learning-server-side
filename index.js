const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());

<<<<<<< HEAD
=======
const courses = require('./data/data.json');

>>>>>>> e7fcfa7 (Created two coursrs data and added vercel config)
app.get('/', (req, res) => {
    res.send("E-TUTOR SERVER RUNNING");
})

<<<<<<< HEAD
=======
app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find( course => course.id === id);
    res.send(course);
})

>>>>>>> e7fcfa7 (Created two coursrs data and added vercel config)
app.listen(port, () => {
    console.log(`E_TUTOR SERVER RUNNING ON PORT ${port}`);
})