import './App.css';
import { Routes, Route } from 'react-router-dom';

//Pages/Components
import Home from './Pages/Home/Home.jsx'

function App() {
  return (

    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    {/* <Navbar /> */}
    {/* <Footer /> */}
    </div>
  );
}

export default App;
