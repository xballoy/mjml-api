import fastify from 'fastify';
import routes from './routes';

const server = fastify({
  logger: true,
});

server.register(routes);

const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
