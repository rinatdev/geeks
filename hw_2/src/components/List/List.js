import React from 'react'

const List = ({ tasks }) => {
  return (
    <>
        {tasks.map(task => <p key={task.id}>{task.task}</p>)}
    </>
  )
}

export default List