import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/Private';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element = { < PrivateComponent />} >  {/* private componet wrapper */}
        <Route  path='/' element={ <h1>Product Listing Component</h1> }/>  { /* endpoint for frontend url */ }
        <Route  path='/add' element={ <h1>add Product Component</h1> }/>  
        <Route  path='/update' element={ <h1> update Product Component</h1> }/>
        <Route  path='/logout' element={ <h1>logout Component</h1> }/>
        <Route  path='/profile' element={ <h1>Profile Component</h1> }/>
        </Route>   {/* private componet wrapper end here */}

        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/login' element = { <Login /> } />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
