import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ThemSanPham = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !price || !description) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const newProduct = {
            title,
            price,
            description,
        };

        try {
            await axios.post("http://localhost:3000/products", newProduct);
            alert("Thêm sản phẩm thành công!");
            navigate("/");
        } catch (error) {
            console.error("Lỗi khi thêm sản phẩm:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h5>Thêm sản phẩm</h5>
            <form onSubmit={handleSubmit} className="card p-3">
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá</label>
                    <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mô tả</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Thêm</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/")}>Trở lại</button>
            </form>
        </div>
    );
};

export default ThemSanPham;
