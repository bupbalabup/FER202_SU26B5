import { Card, Row, Col } from "react-bootstrap";

function Car() {
  return (
    <div className="container mt-4">
      <h2>Cards Columns</h2>
      <Row className="d-flex justify-content-center">
        <Col>
          <Card className="bg-primary">
            <Card.Img variant="top" className="px-3 pt-3" style={{height: "200px", objectFit: "cover" }} src="https://autopro8.mediacdn.vn/2020/7/15/image-11-15948083019242118350447.jpg" />
            <Card.Body>
              <Card.Text className="text-white text-center">
                Some text inside the first card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-warning">
            <Card.Img variant="top" className="px-3 pt-3" style={{height: "200px", objectFit: "cover" }} src="https://autopro8.mediacdn.vn/2020/7/15/image-11-15948083019242118350447.jpg" />
            <Card.Body>
              <Card.Text className="text-white text-center">
                Some text inside the first card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-danger">
            <Card.Img variant="top" className="px-3 pt-3" style={{height: "200px", objectFit: "cover" }} src="https://autopro8.mediacdn.vn/2020/7/15/image-11-15948083019242118350447.jpg" />
            <Card.Body>
              <Card.Text className="text-white text-center">
                Some text inside the first card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Car;
