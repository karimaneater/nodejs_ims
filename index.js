const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes');
const path = require('path');
const methodOverride = require('method-override');

const app = express();


dotenv.config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)

app.use(express.static(path.join(__dirname, 'public')));

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');




app.use('/items', itemRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
