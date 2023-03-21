import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
    return (
        <>
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
