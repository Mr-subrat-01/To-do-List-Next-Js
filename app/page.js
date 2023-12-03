"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [allTask, setallTask] = useState([])

  let renderTask = <h3>No Task Found</h3>
  if (allTask.length > 0) {
    renderTask = allTask.map((t, i) => {
      return <div className='flex justify-between w-3/4 mb-2'>
        <h3>{t.title}</h3>
        <h3>{t.desc}</h3>
        <button className='bg-red-600 px-2 py-1 text-white rounded' onClick={() => deleteHandler(i)}>Delete</button>
      </div>

    })
  }

  const deleteHandler = (i) => {
    let copyAllTask = [...allTask];
    copyAllTask.splice(i, 1);
    setallTask(copyAllTask);
  }

  const formSubmit = (e) => {
    e.preventDefault();

    setallTask([...allTask, { title, desc }])
    console.log(title)
    settitle('');
    setdesc('')
    console.log(allTask)
  }
  return (
    <>
      <form className='m-3 flex flex-col' onSubmit={formSubmit}>
        <input className='border-2 outline-none mb-2  border-yellow-300 rounded px-2 py-2' placeholder='Enter Task'
          value={title}
          onChange={
            (e) => settitle(e.target.value)
          }>
        </input>
        <input className='border-2 outline-none mb-2 border-yellow-300 rounded px-2 py-2' placeholder='Enter  Description'
          value={desc}
          onChange={
            (e) => setdesc(e.target.value)
          }
        ></input>
        <button className='bg-slate-700 text-white p-2 font-bold'>Add Task</button>
      </form>
      <hr />
      <div className='flex flex-col justify-center items-center'>

        {renderTask}
      </div>
    </>
  )
}

export default page
