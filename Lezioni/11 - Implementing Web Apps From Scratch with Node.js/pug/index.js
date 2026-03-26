import pug from 'pug'
import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    const html = pug.renderFile('./index.pug');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    console.log(html);
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
