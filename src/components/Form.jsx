import React,{useEffect} from 'react'
import { v4 as uuid } from 'uuid'


const Form = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) => {
    const updateTodo = (title,id,completed) => {
        const newTodo = todos.map((todo) => {
           return todo.id === id ? {title,id,completed} : todo
        })
        setTodos(newTodo)
        setEditTodo("")
    }
    useEffect(() => {
      if(editTodo){
        setInput(editTodo.title)
      }else{
        setInput("")
      }
    }, [setInput,editTodo])
    
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    const handleFormSubmit = (e) => {
        
        e.preventDefault()
        if(!editTodo){
            setTodos([...todos,{id:uuid(),title:input,completed:false}])
            console.log(todos)
            setInput('')
        }else{
            updateTodo(input,editTodo.id,editTodo.completed)
        }

        

    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Enter todo ...' className='task-input' value={input}
             onChange={handleInputChange} required />
            <button type="submit" className='button-add'>{editTodo ? 'OK' : 'Add'}</button>
        </form>
    </div>
  )
}

export default Form