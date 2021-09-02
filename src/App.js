
import './App.css';
import Navbar from './Compnents/Navbar';
import Form from "../src/Compnents/form"
import Exp from "../src/Compnents/Exp"
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Navbar />
    <Route path='/dashboard'>
      <Exp />
    </Route>
    <Route path='/home'>
      <Form />
    </Route>
      

    </Router>
  );
}

export default App;
