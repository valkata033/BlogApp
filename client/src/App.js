import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

import * as request from './services/authService';

function App() {
    const [auth, setAuth] = useState({});

    const onLoginSubmit = async (data) => {
        const result = await request.login(data);
        
        setAuth(result);
    };


    return (
        <AuthContext.Provider value={onLoginSubmit}>
            <NavBar />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </main>

            <Footer />
        </AuthContext.Provider>
    );
}

export default App;
