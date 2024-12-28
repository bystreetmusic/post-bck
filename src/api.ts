import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import { postRoutes } from "./postRoutes";

const app  =  fastify()
app.register(postRoutes)
app.register(fastifyCors, { origin: "*" })

app.listen({
    host: "0.0.0.0",
    port: 3333
}).then(() => {
})