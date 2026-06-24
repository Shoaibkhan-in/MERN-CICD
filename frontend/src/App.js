import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Routes,Route, Link, BrowserRouter } from 'react-router-dom';
import NotFound from './Components/NotFound';
import UserId from './Components/UserId';
import Login from './Components/Login';
import SemiHome from './Components/SemiHome';
import { lazy, Suspense } from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';


function App() {
  const Register = lazy(()=>
    new Promise(resolve=>{
      setTimeout(()=>{
        resolve(import('./Components/Register'))
      }, 2000)
    })
  )
  return (
    <>
    <h1>user context example</h1>
    <BrowserRouter>
    <Provider store={store}>
    <Navbar />
    
    
    
    
    
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/home' element={
        <Suspense fallback={<h1>Loading...</h1>}>
  <Home />
</Suspense>
      } >
      <Route path='subhome' element={<SemiHome />} />
      </Route>
      <Route path='/register' element={
        <Suspense fallback={<h1>Loading...</h1>}>
  <Register />
</Suspense>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/user/:id' element={<UserId />} />
    </Routes>
    
    </Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
