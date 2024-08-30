import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});


export const createTodo = mutation({
    args:{
        text: v.string(),
        user:v.string()
    },
    handler:async(ctx, args)=>{
        await ctx.db.insert("tasks",{
            text:args.text,
            isCompleted:false,
            userName:args.user
        })
        return true;
    },
})

export const deleteById = mutation({
  args: {
    storageId: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.storageId);
  },
});


export const update = mutation({
  args: {
    storageId: v.id("tasks"),
    isCompleted: v.boolean(),
    text:v.string(),
    userName:v.string()
  },
  handler: async (ctx, args) => {
    await ctx.db.replace(args.storageId, { isCompleted: args.isCompleted , text:args.text , userName:args.userName});
    return true;
  },
});