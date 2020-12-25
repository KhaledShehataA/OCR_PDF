//declared all our imports
const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const { TesseractWorker } = require('tesseract.js');
const worker = new TesseractWorker();


//Declared Storage 
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads");
    },

    filename: (req, res, cb) => {
        cb(null, req.file);
    }
});
const upload = multer({storage: storage}).single('avatar');

app.set('view engine', "ejs");

//Routes

app.get('/', (res, req) => {
    res.render(index);
});


//Start Up our server 
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Hey I'm running on port ${PORT}`));