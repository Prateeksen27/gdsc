import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Team from './Components/Team/Team';
import Partners from './Components/Partners/Partners';

function App() {
  return (
    <div className='div'>
   <Navbar/>
   <Landing/>
   <Partners/>
   <Team/>
   </div>
  );
}

export default App;
