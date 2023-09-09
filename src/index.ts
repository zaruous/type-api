import express from 'express';
import axios from "axios";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/req/:url', (req, res) => {
    const url = req.params.url;
    axios.get(url).then(response=>{
        res.send(response.data);
    }).catch(err =>{
        console.error("Error", err);
    })


});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});