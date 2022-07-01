import React, { useState } from 'react'
import axios from 'axios'

export default function addTodo(){
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    
    function sendData() { 
        const newTodo = {
            title,
            description,
            completed
        }
        axios.post('http://localhost:8070/todo/add', newTodo)
        .then(()=> {
            alert('Todo added successfully');
        })
        .catch(err => alert(err))
    }
    return (
        <div className='container'>
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="txtTitle" placeholder="Enter Title" onChange={
                        (e) => {
                            setTitle(e.target.value)
                        }
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="txtDescription" placeholder="Enter Description" onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="chkcompleted" onChange={
                        (e) => {
                            setCompleted(e.target.checked)
                        }
                    }/>
                    <label className="form-check -label" htmlFor="completed">Completed</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
  
}
