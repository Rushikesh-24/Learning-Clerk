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
    },
    handler:async(ctx, args)=>{
        await ctx.db.insert("tasks",{
            text:args.text,
            isCompleted:false
        })
        return true;
    },
})