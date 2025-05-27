import {z} from "zod"

export const addItemSchema = z.object({
    title: z.string().min(1, {message: "Title is required!"}),
    category: z.string().min(1, {message: "Category is required!"})
})