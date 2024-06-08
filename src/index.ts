import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";
import { appRouter } from "./router/appRouter";

const app = new Elysia()
  // Plugins
  .use(html())
  .use(staticPlugin())
  // Routes
  .use(appRouter)
  // Port
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
