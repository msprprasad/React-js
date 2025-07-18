import React,{useState} from "react";

const AddUser= props =>{
    const [enteredText, setEnteredText] = useState('');
    const addGoalHandler=event =>{
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
          };  
          setEnteredText('');
          props.addUser(newGoal);
    }
    const changeHandler = event =>{
        setEnteredText(event.target.value);
    }
    return (
        <form onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={changeHandler} />
            <input type="submit" value="Add" />
        </form>
    )

}

export default AddUser;