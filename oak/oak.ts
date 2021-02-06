import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', (context) => {
    context.response.body = 'Hello, World!';
});

const app = new Application();

app.use(router.routes());

await app.listen({ port: 8000 });

console.log('Oak server started');
