import 'bootstrap/dist/css/bootstrap.min.css';

import { authServiceFactory } from './services/authService';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { postServiceFactory } from './services/postService';

import { AuthContext } from './contexts/AuthContext';
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const [posts, setPosts] = useState([]);

    const authService = authServiceFactory(auth.accessToken);
    const postService = postServiceFactory(auth.accessToken);
    

    useEffect(() => {
        postService.getAll()
            .then(result => {
                setPosts(result)
            })
    }, []);

    const onLoginSubmit = async (data) => {
        try{
            const result = await authService.login(data);
            
            setAuth(result);

            navigate('/');
        }
        catch (error){
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (data) => {
        const {confirmPassword, ...registerData} = data;

        if(confirmPassword !== registerData.password){
            return;
        };

        try{
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/');
        }
        catch(error) {
            console.log('There is a problem');
        }

    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={contextValues}>
            <NavBar />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home posts={posts} />} />
                        <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register onRegisterSubmit={onRegisterSubmit} />} />
                        <Route path='/user-info' element={<Home />} />
                        <Route path='/create-post' element={<Home />} />
                    </Routes>
                </main>

            <Footer />
        </AuthContext.Provider>
    );
}

export default App;
