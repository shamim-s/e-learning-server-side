const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());

app.get('/', (req, res) => {
    res.send("E-TUTOR SERVER RUNNING");
})

app.listen(port, () => {
    console.log(`E_TUTOR SERVER RUNNING ON PORT ${port}`);
})