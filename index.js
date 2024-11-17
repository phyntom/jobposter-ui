import { createServer as createViteServer } from 'vite';
import jsonServer from 'json-server';
import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

// JSON server
const jsonServerApp = jsonServer.create();
const router = jsonServer.router('src/dummy/gemini.json');
const middlewares = jsonServer.defaults();
jsonServerApp.use(middlewares);
jsonServerApp.use(router);

app.use('/api', jsonServerApp);

const startViteServer = async () => {
   const vite = await createViteServer({
      server: { middlewareMode: 'ssr' },
   });

   app.use(vite.middlewares);
   // eslint-disable-next-line no-undef
   app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
   });
};

startViteServer();
