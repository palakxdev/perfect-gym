import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Common/Footer/Footer';
import NotFound from './Pages/Common/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import BookNow from './Pages/BookNow/BookNow';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/about' element={<About></About>}>About us</Route>
        <Route path='/login' element={<Login></Login>}>Login</Route>
        <Route path='/register' element={<Register></Register>}>Register</Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/booknow' element={
          <RequiredAuth>
            <BookNow></BookNow>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
