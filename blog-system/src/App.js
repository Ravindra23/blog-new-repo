import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Posts from './components/Posts';
import Post from './components/Post';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
    
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/posts' component={Posts} />
      <Route path='/post/:id' component={Post} />
      {/* <Route path='/post/:id/:title' component={Post} /> */}
    </BrowserRouter>
  );
}

export default App;
