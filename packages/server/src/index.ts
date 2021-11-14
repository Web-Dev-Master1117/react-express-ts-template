import express from 'express';
import path from 'path';
const app = express();
const port = 4000;

app.get('/api', (req, res) => {
	res.send('Hello World!');
});

app.use(express.static(path.join(__dirname, '../../client/build')));
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
