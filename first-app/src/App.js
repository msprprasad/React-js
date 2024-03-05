import React from "react";  
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./Home";

//import Test from "./Test";


// const App = () =>{
//   return (
//     <div>
//       <center>
//       <b>welcome to my world!</b>

//       </center>
//     </div>
//   )
// }
// state example
// class App extends React.Component{
//   state ={
//     name :'syam',
//     age:23,
//     data:['sdfgds','2']
//    }
//   render(){
//    // let name= 'syam';
   
//     return (
      
//       <div>
//            <center>
//             <b>welcome to my world! {this.state.name} and age {this.state.age} and array {this.state.data[0]}</b>
      
//              </center>
//            </div>
//     )
//   }
// }
// class App extends React.Component {
//   state ={
//          name :'syam',
//          age:23,
//          data:['sdfgds','2']
//         }
//   render(){
//     return(
//       <div>
//         <center>
//         <button onClick={()=>alert('fsdfgd')}>click me</button>
//          </center>
//       </div>
//     )
//   }
  
// }



// 
const App = () =>{
  return (
    <div>
      <center>  
    <BrowserRouter >
      <Routers>
        <Route path='/' element ={<Home />}/>
      </Routers>
    </BrowserRouter> 
        <h3> welcome to home</h3>
      </center>
    </div>
  )
}
export default App;
