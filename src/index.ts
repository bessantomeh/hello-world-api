import express, { Request, Response } from 'express';
import os from 'os';

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// First Endpoint
app.get('/hello', (req: Request, res: Response) => {
  const name = req.query.name as string;
  const greeting = name ? `Hello, ${name}` : 'Hello, World!';
  res.json({ greeting });
});

// Second Endpoint
app.get('/info', (req: Request, res: Response) => {
  const requestTime = new Date().toISOString();  
  const clientAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const hostName = os.hostname();
  const headers = req.headers;

  res.json({
    time: requestTime,
    client_address: clientAddress,
    host_name: hostName,
    headers: headers,
  });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default server;  
