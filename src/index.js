const express = require('express');
const app = express();
const port = 3000; // 원하는 포트 번호로 변경 가능

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});