import React from 'react'
import { useHistory } from 'react-router-dom'
import { CgInfo } from 'react-icons/cg'
import { AiFillDelete } from "react-icons/ai";


import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskAppDeletion }) => {
  const history = useHistory()

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return (
    <div className="task-container" style={task.completed ? {borderLeft: '6px solid aquamarine'} : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button className="remove-task-button" onClick={() => handleTaskAppDeletion(task.id)}>
          <AiFillDelete />
        </button>
        <button className="see-task-details" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  )
}
 
export default Task