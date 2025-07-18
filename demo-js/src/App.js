
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Users from './users/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
// import Header from './Header';
// import Footer from './Footer';

function App() {
  return ( 
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow p-4">
        {/* Your main content goes here */}
        <p>Welcome to the main content!</p>
        <Router>
          <MainNavigation />
          <Switch>
            <Route path="/" exact >
              <Users />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>       
      </main>
      {/* <Footer /> */}
    </div>
       
      
  );
}
export default App;
