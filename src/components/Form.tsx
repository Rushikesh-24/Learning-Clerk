'use client'
import React, { useState } from 'react'
import { api } from '../../convex/_generated/api'
import { useMutation } from 'convex/react'

const Form = ({ userName }: { userName: string | null | undefined }) => {
  const [text, settext] = useState("");
  const todo = useMutation(api.task.createTodo);
  return (
    <div>
      <form
        className='flex justify-center gap-3'
        onSubmit={async (e) => {
          if (userName) {
            e.preventDefault();
            const status = await todo({ text, user: userName });
            if (status) {
              settext("");
            }
          }
          console.log("form submitted");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          className="border text-black w-80 py-2 px-4"
          placeholder="Enter your task"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form