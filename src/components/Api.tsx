"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

const Api = () => {
  const tasks = useQuery(api.task.get);
  const deleteTask = useMutation(api.task.deleteById);
  const updateCompleition = useMutation(api.task.update)
  const update = async (storageId :Id<"tasks">) => {
    const x = await deleteTask({ storageId});
  };
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <table className="table-auto border-collapse border border-gray-400 w-4/5" >
        <colgroup>
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
        <thead>
          <tr>
            <th className="px-4 py-2 border">Task</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.reverse().map(({ _id, text, isCompleted }) => (
            <tr key={_id}>
              <td className="border px-4 py-2 whitespace-nowrap">{text}</td>
              <td className="border px-4 py-2 whitespace-nowrap">{isCompleted ? "Completed" : "Not completed"}</td>
              <td className={`${isCompleted?"bg-green-800":"bg-gray-400"} border px-4 py-2 cursor-pointer text-white`} onClick={()=>updateCompleition({isCompleted: !isCompleted,storageId:_id,text})}>{isCompleted ? "Done" : "Mark as Done"}</td>
              <td className="border px-4 py-2 ">
                <button onClick={() => update(_id)} className="text-red-700 cursor-pointer">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Api;
