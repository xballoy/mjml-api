import { FastifyInstance } from 'fastify';
import { render, RenderBody, RenderBodyType, RenderResponse, RenderResponseType } from './render';

const routes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{
    Body: RenderBodyType;
    Reply: RenderResponseType;
  }>(
    '/render',
    {
      schema: {
        body: RenderBody,
        response: {
          200: RenderResponse,
        },
      },
    },
    (request, reply) => {
      const result = render(request.body);
      reply.status(200).send(result);
    }
  );
};
export default routes;
