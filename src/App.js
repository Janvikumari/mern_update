import React from 'react'
import Header from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import Blogs from "./pages/Blogs";
import UserBlogs from './pages/UserBlogs';
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from './pages/CreateBlog';
import BlogDetails from "./pages/BlogDetails";
import  {Toaster} from 'react-hot-toast';
const App = () => {
  return (
    <>
      <Header/>
      <Toaster/>
     <Routes>
        <Route path="/" element={<Blogs/>}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-blogs" element={<UserBlogs />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/create-blog" element={<CreateBlog/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
     </Routes>
    </>
  )
}

export default App