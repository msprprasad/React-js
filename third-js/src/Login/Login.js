
import React,{useState} from "react";

const Login = props =>{
    const[employee,setEmployee] =useState([]);
    const[empName,setEmpName] =useState([]);
    const OnLoginSubmit = event =>{
        event.preventDefault(); 
        const newGoal = {
            id: Math.random().toString(),
            empId: employee,
            empname:empName
          };  
          console.log('log'+newGoal);
          setEmployee('');
          setEmpName('');
          props.EmpList(newGoal);
         // console.log('log'+props.addUser);

    }
    

    const EmployeeHandler = event =>{
        setEmployee(event.target.value);
    }
    const EmpNameHandler = event =>{
        setEmpName(event.target.value);
    }

    return (
        <div>

       
            <form onSubmit={OnLoginSubmit}>
                <input type="text" placeholder="Employee id" value ={employee} onChange={EmployeeHandler} />
                <input type="text" placeholder="Enter the Name" value={empName} onChange={EmpNameHandler} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )

}
export default Login;