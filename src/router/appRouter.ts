import {Elysia} from "elysia";

export const appRouter = new Elysia()

    // interfaces
    .get("/", ()=> {})
    .get("/tools", ()=>{})
    .get("/tools/manage", ()=>{})
    .get("/tools/submission", ()=>{})

    // functionals
    .get("/tools/:id", ()=>{})
    .post("/tools", ()=>{})
    .patch("/tools/:id", ()=>{})