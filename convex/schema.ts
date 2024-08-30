import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

  tasks: defineTable({
    isCompleted: v.optional(v.boolean()),
    text: v.string(),
    userName: v.string(),
  }),
});