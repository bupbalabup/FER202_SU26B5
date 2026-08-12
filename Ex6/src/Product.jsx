import { Navbar, Container, Nav, Form, Button, Carousel, Row, Col, Card, Badge } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";

function Product() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      oldPrice: "100.000 vnd",
      newPrice: "80.000 vnd",
      sale: false,
    },
    {
      id: 2,
      name: "Product 2",
      oldPrice: "100.000 vnd",
      newPrice: "80.000 vnd",
      sale: false,
    },
    {
      id: 3,
      name: "Product 3",
      oldPrice: "100.000 vnd",
      newPrice: "80.000 vnd",
      sale: false,
    },
    {
      id: 4,
      name: "Product 4",
      oldPrice: "100.000 vnd",
      newPrice: "80.000 vnd",
      sale: true,
    },
  ];

  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
              <Nav.Link href="#" active>
                Home
              </Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#">Dropdown</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel className="mb-3">
        <Carousel.Item>
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLsyrgU3uY9U4mXIgZ2ja1zzsy_CkL4CQjnlPnm4cmek8vpB1d"
            className="d-block w-100"
            alt="banner1"
            style={{ maxHeight: "530px", maxWidth: "1920px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLsyrgU3uY9U4mXIgZ2ja1zzsy_CkL4CQjnlPnm4cmek8vpB1d"
            className="d-block w-100"
            alt="banner1"
            style={{ maxHeight: "530px", maxWidth: "1920px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLsyrgU3uY9U4mXIgZ2ja1zzsy_CkL4CQjnlPnm4cmek8vpB1d"
            className="d-block w-100"
            alt="banner1"
            style={{ maxHeight: "530px", maxWidth: "1920px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
      <Container className="p-5">
        <h3>NEW PRODUCT</h3>
        <p className="text-muted">List product description</p>

        <Row xs={1} md={4} className="g-4">
          {products.map((p) => (
            <Col key={p.id}>
              <Card className="h-100">
                {p.sale && (
                  <Badge
                    bg="warning"
                    className="position-absolute top-0 end-0"
                    style={{
                      borderBottomLeftRadius: "5px",
                      borderTopRightRadius: "0px",
                      borderTopLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                  >
                    Sale
                  </Badge>
                )}

                <Card.Img
                  variant="top"
                  src={`/280x280.png`}
                  alt={p.name}
                  style={{ height: "280px", objectFit: "cover" }}
                />

                <Card.Body className="text-center">
                  <Card.Title as="h6">{p.name}</Card.Title>
                  <Card.Text className="mb-1">
                    <span className="text-muted text-decoration-line-through me-2">
                      {p.oldPrice}
                    </span>
                    <span className="text-warning fw-bold">{p.newPrice}</span>
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="bg-white border-0 text-center">
                  <Button variant="primary" size="sm" className="me-2">
                    <CartFill />
                  </Button>
                  <Button variant="outline-secondary" size="sm">
                    Xem chi tiết
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Product;
