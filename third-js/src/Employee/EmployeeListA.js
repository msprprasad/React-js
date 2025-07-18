import React from "react";


function EmployeeListA(props)
{
    return (
        <ul className="goal-list">
           {Array.isArray(props.goals) && props.goals.map((goal) => (
            <div key={goal.id}>{goal.empId} || {goal.empname} </div>
            ))}
        </ul>
    )
}
export default EmployeeListA;