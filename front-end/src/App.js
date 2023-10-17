import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/Private';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element = { < PrivateComponent />} >  {/* private component wrapper */}
        <Route  path='/' element={ <ProductList /> }/>  { /* endpoint for frontend url */ }
        <Route  path='/add' element={ <AddProduct /> }/>  
        <Route  path='/update/:id' element={ <UpdateProduct /> }/>
        <Route  path='/logout' element={ <h1>logout Component</h1> }/>
        <Route  path='/profile' element={ <h1>Profile Component</h1> }/>
        </Route>   {/* private component wrapper end here */}

        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/login' element = { <Login /> } />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
