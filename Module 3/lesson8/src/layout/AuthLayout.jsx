import { Outlet } from 'react-router';
import logo from '../assets/tre01.png';
import './AuthLayout.css';

const AuthLayout = () => {
    return (
        <div className="card">
            <img src={logo} alt="Logo" class="logo" />
            <Outlet />
        </div>
    );
};

export default AuthLayout;