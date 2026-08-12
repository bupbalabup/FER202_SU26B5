import { Form, Button, Row, Col, InputGroup, Container } from "react-bootstrap";

function FormVeMayBay() {
    return (
        <Container className="mt-4" style={{ maxWidth: "500px" }}>
            <h2 className="mb-3">Form đặt vé máy bay</h2>

            <Form.Group className="mb-3">
                <Form.Label>Họ tên</Form.Label>

                <InputGroup>
                    <InputGroup.Text>
                        <i className="bi bi-person"></i>
                    </InputGroup.Text>

                    <Form.Control placeholder="Họ tên" />

                    <InputGroup.Text>vnd</InputGroup.Text>
                </InputGroup>

                <Form.Text className="text-muted">
                    Phải nhập 5 ký tự, in hoa...
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Địa chỉ</Form.Label>

                <Form.Control placeholder="Nhập địa chỉ" />

                <Form.Text className="text-muted">
                    Phải nhập 5 ký tự, in hoa...
                </Form.Text>
            </Form.Group>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Đi từ</Form.Label>
                        <Form.Select>
                            <option>Hà Nội</option>
                            <option>Đà Nẵng</option>
                            <option>Hồ Chí Minh</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Đến</Form.Label>
                        <Form.Select            >
                            <option>Hà Nội</option>
                            <option>Đà Nẵng</option>
                            <option>Hồ Chí Minh</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>

                <Form.Check type="checkbox" label="Đi" />

                <Form.Check type="checkbox" label="Về" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
                Đặt vé
            </Button>
        </Container>
    )
}

export default FormVeMayBay;