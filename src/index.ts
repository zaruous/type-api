import express, {Request, Response} from 'express';
import axios from "axios";

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.get('/req/:url', (req: Request, res: Response) => {

    const url = req.params.url;
    axios.get(url).then(response => {
        res.send(response.data);
    }).catch(err => {
        console.error("Error", err);
    })
});

app.get('/async/:id', (req:Request, res : Response) => {
    performAsyncTask(req.params.id).then(a =>{
        console.log(`then : ${a}`);
    });
});

// 비동기 작업을 모방하는 함수 (실제 비동기 작업으로 대체해야 함)
function performAsyncTask(data: string) {
    return new Promise((resolve, reject) => {
        console.log(`received data : ${data}`)
        resolve(`resolve data : ${data}`);
        /*
        setTimeout(() => {

        }, 1000); // 1초 후 작업 완료
         */
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});