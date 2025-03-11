import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router';

const UserForm = () => {
    const [name, setName] = useState({
        name: "",
        email: "",
        age: "",
        address: "",
        avatar: "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    // Lấy thông tin user nếu đang ở chế độ sửa
    useEffect(() => {
        if (!id) return;

        const fetchUser = async () => {
            const response = await axios.get(`http://localhost:3000/users/${id}`);
            setName(response.data.name);
        };

        fetchUser();
    }, [id]);

    // Xử lý nhập liệu
    const handleChange = (e) => {
        const { name, value } = e.target;
        setName((prew) => ({
            ...prew,
            [name]: value,
        }));
    };

    // Xu ly gui form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await axios.put(`http://localhost:3000/users/${id}`, { name });
            alert('Cập nhật người dùng thành công!');
        } else {
            await axios.post('http://localhost:3000/users', { name });
            alert('Thêm mới người dùng thành công!');
            setName('');
        }
    };

    return (
        <div className="container py-4">
            <h2>User Detail</h2>
            <NavLink to={'/'}>Back to Home</NavLink>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <div className="d-flex">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="btn btn-success">
                        {id ? 'Update' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;