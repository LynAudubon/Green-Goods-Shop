require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors')

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use(express.static('dist'));
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');


// app.use(express.static('src'));
// const DIST_DIR = path.join(__dirname, '../src');
// const HTML_FILE = path.join(DIST_DIR, 'index.html');


app.get('/', (req, res) => {
    res.sendFile(HTML_FILE, function(err) {
        if(err) {
            res.status(500).send(err);
        }
    });
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT||5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));