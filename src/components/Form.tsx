'use client'
import React, { useState } from 'react'
import { api } from '../../convex/_generated/api'
import { useMutation } from 'convex/react'

const Form = () => {
    const [text, settext] = useState("")
    const todo = useMutation(api.task.createTodo)
  return (
    <div>
        <form onSubmit={async e=>{
      e.preventDefault()
      console.log("form submitted")
      const status = await todo({text})
      if(status){
        settext("")
      }
    }}>
      <input type="text" value={text} onChange={e => {settext(e.target.value)}} className='border text-black'/>
      <button>Create</button>
    </form>
    </div>
  )
}

export default Form