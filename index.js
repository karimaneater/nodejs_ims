const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes');
const path = require('path');


const app = express();


dotenv.config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)

app.use(express.static(path.join(__dirname, 'public')));

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');




app.use('/items', itemRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
