import { serve } from 'https://deno.land/std@0.84.0/http/server.ts';

const server = serve({ port: 8000 });

for await (const request of server) {
    request.respond({ body: 'Hello, World!' });
}

console.log('Deno server started');
