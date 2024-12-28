import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import { postRoutes } from "./postRoutes";

const app  =  fastify()
app.register(postRoutes)
app.register(fastifyCors, {
    origin: 'https://adm-post.vercel.app', // Permitir apenas este domínio
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
});

app.listen({
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 3333
}).then(() => {
})