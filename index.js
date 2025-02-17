const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <html>
        <head>
            <title>Tech Intelligence</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #121212;
                    color: #00ffcc;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    font-size: 50px;
                    text-shadow: 3px 3px 10px #00ffcc;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to Tech Intelligence</h1>
            <h2>The Ultimate DevOps Course in INDIA</h2>
        </body>
        </html>
    `);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

