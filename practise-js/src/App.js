import React,{useState} from 'react';


import './App.css';
import User from './UserList/User';
import AddUser from './AddUserList/AddUser';
function App() {
  const [users, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' }
  ]);

  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <AddUser addUser={addNewGoalHandler} />
        <User userlist={users}/>
        
      {/* </header> */}
    </div>
  );
}

export default App;
