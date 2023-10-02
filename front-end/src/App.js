import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route  path='/' element={ <h1>Product Listing Component</h1> }/>
        <Route  path='/add' element={ <h1>add Product Component</h1> }/>  
        <Route  path='/update' element={ <h1> update Product Component</h1> }/>
        <Route  path='/logout' element={ <h1>logout Component</h1> }/>
        <Route  path='/profile' element={ <h1>Profile Component</h1> }/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
