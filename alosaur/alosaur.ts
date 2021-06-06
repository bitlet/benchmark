import {
    App,
    Area,
    Controller,
    Get,
} from "https://deno.land/x/alosaur@v0.31.0/mod.ts";

@Controller()
export class HomeController {
    @Get()
    text() {
        return "Hello, World!";
    }
}

@Area({
    controllers: [HomeController],
})
export class HomeArea {}

const app = new App({
    areas: [HomeArea],
});

app.listen();

console.log("Alosaur server started");
