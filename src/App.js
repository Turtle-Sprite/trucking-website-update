import './App.css';
import { Routes, Route } from 'react-router-dom';

//Pages/Components
import Home from './Pages/Home/Home.jsx'
import Footer from './Partials/Footer';

function App() {
  return (
    <div>
      <div className="App">
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
