const express = require('express');
const cors = require('cors');
const app = express();
const tareasroutes = require('./routes/tareasroutes');

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/api', tareasroutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
