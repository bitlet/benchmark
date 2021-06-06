import {
    Application,
    Controller,
    Format,
    Get,
    Response,
    Route,
} from "https://raw.githubusercontent.com/bitlet/bit/main/mod.ts";

@Route("/")
class DefaultController extends Controller {
    @Get("/")
    index() {
        return new Response({
            body: "Hello, World!",
            status: 200,
            format: Format.Html,
        });
    }
}

const app = await new Application()
    .registry()
    .controllers([DefaultController])
    .prepare();

app.serve({ port: 8000 });

console.log("Bitlet server started");
