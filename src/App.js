import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';
import {ReactComponent as Edit } from "./assets/edit.svg";
import {ReactComponent as Save  } from "./assets/save.svg";
import {ReactComponent as Trash  } from "./assets/trash.svg";
import React, { useEffect, useState } from 'react';
function App() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    setTodoList(prevTodoList => [...prevTodoList, {id: uuidv4(),todo:todo,isEditable:false,isCompleted:false}])
    setTodo("")

  }
  const completeTodo=(id)=>{
    setTodoList(prevTodoList=>prevTodoList.map(todoItem=>todoItem.id===id?{...todoItem,isCompleted: !todoItem.isCompleted} :todoItem ))
  }
  const editTodo=(id)=>{
    setTodoList(prevTodoList=>prevTodoList.map(todoItem=>todoItem.id===id?{...todoItem,isEditable:!todoItem.isEditable}: todoItem ))
  }





  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className='mt-5'>Todo List</h1>
      <div className='d-flex flex-row w-75 mt-3'>
        <Form.Control className='w-75'
          placeholder="Todo Input..."
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <Button className='ms-5' onClick={() => addTodo()}>Add Todo</Button>

      </div>
      <div className='mt-5 w-75'>
        {
          todoList.map(
            todoItem => <div key={todoItem.id}
             className="d-flex justify-content-between">
              <div className='d-flex'>
              <Form.Check
                type="checkbox"
                className='me-5'
                value={todoItem.isCompleted}
                onChange={()=>completeTodo()}
              
              /> <label className={"${todoItem.isCompleted ? 'text-decoration-line-through':''} fw-bold "}>{todoItem.todo}</label>
              </div>
              <div>
                {
                  !todoItem.isEditable ? <Edit width={25} height={25} style={{cursor:"pointer"}} className="me-2" onClick="{()=>editTodo(todoItem.id) }" />
                : <Save width={25} height={25} style={{cursor:"pointer"}} className="me-2"/>}
                
                <Trash width={25} height={25} style={{cursor:"pointer"}} className="me-2"/>
              </div>



              </div>
          )
        }
      </div>
    </div>
  )
}

export default App;
