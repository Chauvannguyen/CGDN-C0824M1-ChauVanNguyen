import { useEffect, useState } from "react";
import axios from "axios";

const DanhSach = () => {
    const [products, setProducts] = useState([]);

    // Gọi API từ JSON Server
    useEffect(() => {
        axios
            .get("http://localhost:3000/products")
            .then((response) => setProducts(response.data))
            .catch((error) => console.error("Lỗi khi lấy danh sách sản phẩm:", error));
    }, []);

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-light">
                    <h5>Danh sách sản phẩm</h5>
                </div>
                <div className="card-body">
                    <button className="btn btn-success mb-3">Thêm mới </button>
                    <table className="table table-striped">
                        <thead className="table-secondary">
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Mô tả</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td><strong>{index + 1}</strong></td>
                                <td>
                                    <a href="#" className="text-primary text-decoration-none">
                                        {product.title}
                                    </a>
                                </td>
                                <td>{product.description}</td>
                                <td>{Number(product.price).toLocaleString()} VND</td>
                                <td>
                                    <button className="btn btn-danger btn-sm me-2">Xoá</button>
                                    <button className="btn btn-primary btn-sm">Sửa</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DanhSach;
