import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import {blogInput, updateBlogInput} from "@imramya/blogging-app-common"

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables:{
        userId: any
    }
}>();

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization");
    const token = authHeader?.split(" ")[1] || "";
    try{
        const user  = await verify(token,c.env.JWT_SECRET);
        c.set("userId",user.id);
        await next();
    }
    catch{
        c.status(403);  
        return c.json({
            msg: "unauthorized"
        })
    }
});

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select:{
            content: true,
            title: true,
            authorId: true,
            id: true,
            author: {
                select:{
                    name: true
                }
            }
        }
    })
    return c.json({blogs})
})

blogRouter.get('/:id', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

   try{
    const blog = await prisma.post.findFirst({
        where: {
            id: c.req.param('id')
        },
        select:{
            content: true,
            title: true,
            authorId: true,
            id: true,
            author: {
                select:{
                    name: true
                }
            }
        }
    })
    if(!blog){
        c.status(404);
        return c.json({msg:"not found"})
    }

    return c.json({blog})

   }catch(e){
    return c.json("invalid")
   }
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body)
    if(!success) return c.json({msg:"invalid creds"})

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })

    return c.json({ id: blog.id })
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const {success} = blogInput.safeParse(body)
    if(!success) return c.json({msg:"invalid creds"})
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: c.get("userId")
        }
    })

    return c.json({ id: blog.id })
})