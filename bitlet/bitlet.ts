import {
    Application,
    Controller,
    Get,
    Response,
    Route,
} from "https://raw.githubusercontent.com/bitlet/bit/main/mod.ts";

@Route("/")
class DefaultController extends Controller {
    @Get("/")
    index() {
        return new Response({
            message: "Hello, World!",
            status: 200,
        });
    }
}

const app = await new Application()
    .registry()
    .controllers([DefaultController])
    .prepare();

app.serve({ port: 8000 });

console.log("Bitlet server started");
