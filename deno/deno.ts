const response = new TextEncoder().encode("Hello, World!");

for await (const conn of Deno.listen({ port: 8000 })) {
    (async () => {
        for await (const { respondWith } of Deno.serveHttp(conn)) {
            respondWith(new Response(response));
        }
    })();
}

console.log("Deno server started");
