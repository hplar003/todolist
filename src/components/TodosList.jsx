import React from 'react'
import {AiOutlineCheck,AiFillEdit,AiFillDelete} from 'react-icons/ai'

const TodosList = ({todos,setTodos,setEditTodo}) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {

            if(item.id === todo.id){
                return {...item,completed:!item.completed}
            }
            return item
        }))
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <div>
        {todos.map((todo) => (
            <li className='list-item' key={todo.id}>
                <input type="text" value={todo.title}
                    className={`list ${todo.completed ? 'complete' : ''}`}
                    onChange={(e) => e.preventDefault()}
                />
                <div>
                    <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                        <AiOutlineCheck />
                    </button>
                    <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                        <AiFillEdit />
                    </button>
                    <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                        <AiFillDelete />
                    </button>
                </div>
            </li>
        ))}
    </div>
  )
}

export default TodosList 