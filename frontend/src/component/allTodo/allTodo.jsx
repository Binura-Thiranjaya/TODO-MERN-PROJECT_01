import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';



export default function allTodo() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const getTodos = async() =>{
            await axios.get('http://localhost:8070/todo/')
            .then(res => {
                setTodos(res.data);
            })
            .catch(err => alert(err))
        }
        getTodos();
    }, []);
    const  deleteData = async(id)=>{
        await axios.delete('http://localhost:8070/todo/' + id)
        .then(()=> {
            alert('Todo deleted successfully');
            window.location.reload(false);
        }
        )
        .catch(err => alert(err))
    }
    return (
      <div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Checked</th>
                <th scope="col">Created Date</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>

                </tr>
            </thead>
            <tbody>
                    {todos.map(todo => (
                    <tr key={todo._id}>
                           <th scope="row">{todo.title}</th>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'Yes' : 'No'}</td>
                            <td>{todo.createdAt}</td>
                            <td>
                                <Link to={`/update/${todo._id}`} className='btn btn-info'>Update</Link>
                            </td>
                            <td><button className='btn btn-danger' onClick={()=> deleteData(todo._id)} style={{color:"black"}}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
      </div>
    )
  
}

