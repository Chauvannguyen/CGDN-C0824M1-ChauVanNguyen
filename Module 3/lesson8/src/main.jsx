import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import App from './App.jsx';
import Register from './pages/Register.jsx';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Routes,
} from 'react-router';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import AuthLayout from './layout/AuthLayout.jsx';
import PostDetail from './pages/PostDetail.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route index element={<App />} />
                <Route element={<AuthLayout />}>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="posts/:id" element={<PostDetail />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </StrictMode>
);