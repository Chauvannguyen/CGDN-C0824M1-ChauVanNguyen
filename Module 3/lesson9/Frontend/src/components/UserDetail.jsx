import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.error("Lỗi:", err));
    }, [id]);

    if (!user) return <p>Đang tải dữ liệu...</p>;

    return (
        <div>
            <h2>Thông tin chi tiết của {user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Tuổi:</strong> {user.age}</p>
            <p><strong>Địa chỉ:</strong> {user.address}</p>
        </div>
    );
};

export default UserDetail;
