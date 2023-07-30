import cors from 'cors';
import server from 'json-server';
import path from 'path';

const jsonServer = server.create();
const router = server.router(
  path.join(__dirname, '..', '..', 'enterprises-server.json')
);
const middlewares = server.defaults();

jsonServer.use(cors());
jsonServer.use(middlewares);
jsonServer.use(router);

const PORT = 8000;

jsonServer.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
