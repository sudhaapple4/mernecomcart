import React, { useEffect } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Login from './features/auth/components/Login';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthAsync, selectLoggedInUser } from './features/auth/authSlice';
import { Protected } from './features/auth/Protected';
import SignUp from './features/auth/components/Signup';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Protected>
          <Home/>
        </Protected>
    ),
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
])

function App() {
  const dispatch=useDispatch()
  const user = useSelector(selectLoggedInUser);
  useEffect(()=>{
    // console.log('before')
    dispatch(checkAuthAsync(user));
    // console.log('after')
  },[user])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
