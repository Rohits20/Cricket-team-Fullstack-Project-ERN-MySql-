import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/LoginPage'
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className='bigContainer'>
      <Router>
        <Routes>
        <Route path ="/" element ={<LoginPage/>}/>
        <Route path ="/homePage" element ={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
