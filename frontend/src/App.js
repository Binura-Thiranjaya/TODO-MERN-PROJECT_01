import './App.css';
import React  from 'react';
import AddTodo from './component/addTodo/addTodo';
import HomePage from './component/homePage/homePage';
import AllTodo from './component/allTodo/allTodo';
import ModifyTodo from './component/modifyTodo/modifyTodo';

import {BrowserRouter,Routes,Route,} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <HomePage/>
        <Routes>
          <Route path="/" exact element={<AllTodo/>} />
          <Route path="add" exact element={<AddTodo />} />
          <Route path="update/:id" element={<ModifyTodo />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
