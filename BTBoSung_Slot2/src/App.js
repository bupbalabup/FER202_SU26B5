import React from 'react';
import { Container, Table, Card, Row, Col, Badge } from 'react-bootstrap';

function App() {
    const products = [
        { id: 1, name: 'Laptop ASUS', inputPrice: 15000, outPrice: 18500, stock: 5 },
        { id: 2, name: 'Chuột', inputPrice: 300, outPrice: 450, stock: 0 },
        { id: 3, name: 'Bàn phím', inputPrice: 800, outPrice: 1200, stock: 10 },
        { id: 4, name: 'Màn hình Dell', inputPrice: 3500, outPrice: 4200, stock: 2 },
    ];

    const maxProduct = products.reduce((max, p) =>
        p.outPrice > max.outPrice ? p : max
    );

    const minProduct = products.reduce((min, p) =>
        p.outPrice < min.outPrice ? p : min
    );

    const sortedProducts = [...products].sort(
        (a, b) => (b.outPrice - b.inputPrice) - (a.outPrice - a.inputPrice)
    );

    return (
        <Container className="mt-4">

            <h1>Danh sách sản phẩm</h1>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá nhập</th>
                        <th>Giá bán</th>
                        <th>Tồn kho</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.inputPrice}</td>
                            <td>{p.outPrice}</td>
                            <td>{p.stock}</td>
                            <td>
                                {p.stock > 0 ? (
                                    <p>Còn hàng</p>
                                ) : (
                                    <p>Hết hàng</p>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h1>Hiển thị theo giá bán lớn/nhỏ nhất</h1>
           
                            <h3>Giá bán cao nhất</h3>
                            <p>Name: {maxProduct.name}</p>
                            <p>Price: {maxProduct.outPrice}</p>
                
                    <h3>Giá bán thấp nhất</h3>
                    <p>Name: {minProduct.name}</p>
                    <p>Price: {minProduct.outPrice}</p>
                

            <h3>Sắp xếp theo lợi nhuận giảm dần</h3>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giá nhập</th>
                        <th>Giá bán</th>
                        <th>Lợi nhuận</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map((p) => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.inputPrice}</td>
                            <td>{p.outPrice}</td>
                            <td>{p.outPrice - p.inputPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default App;