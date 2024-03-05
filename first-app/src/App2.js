import React from 'react';
import { BrowserRouter , Router, Route  } from "react-router-dom";
import About  from './About';
import Dashboard from './Dashboard';
import Home from './Home';


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Router>
                <Route path='/' element={<Home/>}/>
                <Route path='/dashbaord' element={<Dashboard/>}/>
                <Route path='/about' element={<About/>}/>

                 
            </Router>
        </BrowserRouter>
    </div>
  )
}

export default App
