const http = require('http');

const server = http.createServer((req, res) => {
    const { headers, url, method} = req;
    console.log(headers, url, method);
    res.end();
})

const PORT = 3000

server.listen(PORT, () =>{
    console.log(`listening on ${PORT}`)
})