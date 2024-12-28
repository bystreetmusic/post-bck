import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";


export async function postRoutes (app: FastifyInstance) {
    // get all Post
    app.get('/post', async () => {
        const posts = await prisma.post.findMany({
            orderBy : {
                creatAt: "desc"
            },
            select : {
                titulo: true
            }
        })
        return posts
    })

    // get one Post
    app.post('/post', async (request, reply) => {
		const { titulo, musico, genero, imagem, descricao } = request.body
		await prisma.post.create({
			data: {
				titulo,
				musico,
                genero,
                imagem,
                descricao,
			}
		})
		return reply.status(201).send()
	})
    // update one Post
    // delete one Post
    
}