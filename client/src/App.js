import { Routes, Route } from 'react-router-dom';

import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { CreatePost } from './components/CreatePost/CreatePost';
import { UserInfo } from './components/UserInfo/UserInfo';
import { AuthProvider } from './contexts/AuthContext';
import { PostProvider } from './contexts/PostContext';
import { RouteGuard } from './components/common/RouteGuard';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <AuthProvider>
            <PostProvider>

                <NavBar />
                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />

                            <Route element={<RouteGuard />}>
                                <Route path='/logout' element={<Logout />} />
                                <Route path='/user-info' element={<UserInfo />} />
                                <Route path='/create-post' element={<CreatePost />} />
                            </Route>
                        </Routes>
                    </main>
                <Footer />

            </PostProvider>
        </AuthProvider>
    );
}

export default App;
