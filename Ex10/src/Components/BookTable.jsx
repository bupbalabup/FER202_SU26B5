import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function BookTable() {
    return (
        <div className="bg-dark text-light py-5">
            <Container className="bg-dark text-light">
                <h2 className="text-center mb-3">Book Your Table</h2>
                <Form className="bg-dark text-light">
                    <Row className="mb-5">
                        <Col md={4}>
                            <Form.Control type="text" placeholder="Your Name *" />
                        </Col>
                        <Col md={4}>
                            <Form.Control type="email" placeholder="Your Email *" />
                        </Col>
                        <Col md={4}>
                            <Form.Select>
                                <option>Select a Service</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={4} placeholder="Please write your comment" />
                    </Form.Group>

                    <Button variant="warning" className="px-5 fw-bold text-light">
                        Send Message
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default BookTable;