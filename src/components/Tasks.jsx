import React from 'react'

import Task from './Task'

const Tasks = ({ tasks, handleTaskClick, handleTaskAppDeletion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskClick={handleTaskClick} handleTaskAppDeletion={handleTaskAppDeletion}/>
      ))}
    </>
  )
}
      

export default Tasks