import React, { useState } from 'react';
import './App.css';
import Login from './Login/Login';
import EmployeeListA from './Employee/EmployeeListA';

function App() {
  const [EmpList,setEmpList] = useState([]);
  // const [courseGoal,setcourseGoal]= useState([
  //   {id:'list-1',text:'Finish the Course'},
  //   {id:'list-2',text:'Learn all about the Course Main Topic'},
  //   {id:'list-3',text:'Help other students in the Course Q&amp;A'},
  //   {id:'list-4',text:'Help other students in the Course Q&amp;A'}
  // ]);
  const addnewGoalHandler = newGoal =>{
    setEmpList(EmpList.concat(newGoal));
  }
  return (
    <div>   
      <Login EmpList={addnewGoalHandler} />
      <EmployeeListA goals={EmpList} />
    </div>
  );
};

export default App;
