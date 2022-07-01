import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
function modifyTodo() {
    const params = useParams();
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
   useEffect(() => {
        const getTodos= async() =>{
            await axios.get(`http://localhost:8070/todo/${(params.id)}`)
            .then(res => {
                setTodos(res.data);

                setTitle(res.data.title);
                setDescription(res.data.description);
                setCompleted(res.data.completed);

                document.getElementById('txtTitle').value = res.data.title;
                document.getElementById('txtDescription').value = res.data.description;
                document.getElementById('chkcompleted').checked = res.data.completed;
            })
            .catch(err => alert(err))
        }
        getTodos();
    }, []);
     const  updateData =async ()=> {
        alert(params.id+""+title+" "+description+" "+completed);
        await axios.put(`http://localhost:8070/todo/update/${(params.id)}`, {
            title: title,
            description: description,
            completed: completed
        })
        .then(()=> {
            alert('Todo updated successfully');
            window.location.reload(false);
        }
        )
        .catch(err => alert(err))
    }
        return (

            <div className='container'>
            <h1>{params.id}</h1>
            <form onSubmit={updateData}>
            <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="txtTitle"  placeholder="Enter Title" onChange={
                        (e) => {
                            setTitle(e.target.value)
                        }
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="txtDescription"  placeholder="Enter Description" onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="chkcompleted"  onChange={
                        (e) => {
                            setCompleted(e.target.checked)
                        }
                    }/>
                    <label className="form-check -label" htmlFor="completed">Completed</label>
                </div>
                <button type="submit" className="btn btn-primary" >Update</button>
            </form>
        </div>
        );
    
}

export default modifyTodo;