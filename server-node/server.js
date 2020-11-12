const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

var cors = require('cors');
app.use(cors())

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname,'index.html'))
})

app.get('/api/products', (req, res) => {
    res.sendfile(path.join(__dirname,'products.json'))
})

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,  () => {console.log('Example app listening on port 3000!');});
