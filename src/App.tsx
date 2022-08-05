import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './app/components/NavBar';
import CreationPost from './app/pages/CreationPost';
import EditPost from './app/pages/EditPost';
import Posts from './app/pages/Posts';

function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar/><br/>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/new" element={<CreationPost />} />
        <Route path="/edit/:post_id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
