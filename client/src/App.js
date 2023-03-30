import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as postService from './services/postService';

import { AuthProvider } from './contexts/AuthContext';
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { CreatePost } from './components/CreatePost/CreatePost';
import { UserInfo } from './components/UserInfo/UserInfo';


function App() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(result => {
                setPosts(result)
            })
    }, []);

    const onCreatePostSubmit = async (data) => {
        const newPost = await postService.create(data);

        setPosts(state => [...state, newPost]);

        navigate('/');
    }

    return (
        <AuthProvider>
            <NavBar />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home posts={posts} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/user-info' element={<UserInfo posts={posts} />} />
                    <Route path='/create-post' element={<CreatePost onCreatePostSubmit={onCreatePostSubmit} />} />
                </Routes>
            </main>

            <Footer />
        </AuthProvider>
    );
}

export default App;
