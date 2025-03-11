import { NavLink } from 'react-router';

const Login = () => {
    return (
        <>
            <h1>Đăng nhập</h1>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <button>Đăng nhập</button>
                <p>
                    Nếu chưa có tài khoản, <NavLink to="/register">Đăng ký</NavLink>
                </p>
            </form>
        </>
    );
};

export default Login;