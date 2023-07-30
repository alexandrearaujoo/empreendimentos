import server from 'json-server';

const jsonServer = server.create();
const router = server.router('enterprises-server.json');

const middlewares = server.defaults();

jsonServer.use(middlewares);
jsonServer.use(router);

const PORT = 8000;

jsonServer.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
