"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

const Api = ({userName}: { userName: string | null | undefined }) => {
  const tasks = useQuery(api.task.get);
  const deleteTask = useMutation(api.task.deleteById);
  const updateCompleition = useMutation(api.task.update);
  // const { userId } = auth();
  const update = async (storageId: Id<"tasks">) => {
    const x = await deleteTask({ storageId });
  };
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <table className="table-auto border-collapse border border-gray-400 w-4/5">
        <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <thead>
          <tr>
            <th className="px-4 py-2 border">Task</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Username</th>
            <th className="px-4 py-2 border">Update</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.reverse().map(({ _id, text, isCompleted , userName }) => (
            <tr key={_id}>
              <td className="border px-4 py-2 whitespace-nowrap">{text}</td>
              <td className="border px-4 py-2 whitespace-nowrap">
                {isCompleted ? "Completed" : "Not completed"}
              </td>
              <td className="border px-4 py-2 whitespace-nowrap">{userName}</td>
              <td
                className={`${isCompleted ? "bg-green-800" : "bg-gray-400"} border px-4 py-2 cursor-pointer text-white ${userName ? "" : "disabled:opacity-50 cursor-not-allowed"}`}
                onClick={() => {
                  if(userName){
                  updateCompleition({
                    isCompleted: !isCompleted,
                    storageId: _id,
                    text,
                    userName: userName,
                  })
                }}
                }
              >
                {isCompleted ? "Done" : "Mark as Done"}
              </td>
              <td className="border px-4 py-2 ">
                <button
                  onClick={() => update(_id)}
                  className="text-red-700 cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Api;
