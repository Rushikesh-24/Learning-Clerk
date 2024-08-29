'use client'
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
const Api = () => {
    const tasks = useQuery(api.task.get);
  return (
    <main className="flex flex-col items-center justify-between">
    {tasks?.map(({ _id, text , isCompleted }) => <div key={_id}>{text}  {isCompleted?"Completed":"Not completed"}</div>)}
  </main>
  )
}

export default Api