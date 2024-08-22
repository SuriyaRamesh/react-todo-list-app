import React from 'react'

const TodoForm = () => {
  return (
    <form>
      <input type='text' placeholder='What is the task today?' className='todo-input' />
      <button type='submit' className='todo-btn' >Add Task</button>
    </form>
  )
}

export default TodoForm
