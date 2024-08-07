import './App.css';
import React, { Suspense } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';


const Home = React.lazy (()=> import ('./component/Home'));
const About = React.lazy (()=> import ('./component/About'));
const Login = React.lazy (()=> import ('./component/Login'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div> Loading.... </div>}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Login' element={<Login/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
