import {NavLink} from "react-router";

const register = () => {
    return (
        <>
            <h1>Đăng ký</h1>
            <form action="">
                <div>
                    <lable htmlFor="username">Username</lable>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <button>Đăng ký</button>
                <p>
                    Nếu đã có tài khoản, <NavLink to="/login">Đăng Nhập</NavLink>
                </p>
            </form>
        </>
    )
};

export default register;