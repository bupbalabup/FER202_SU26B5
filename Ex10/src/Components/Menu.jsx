import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Menu() {

    const pizzas = [
        {
            name: 'Margherita Pizza',
            price: 24.00,
            oldPrice: 40.00,
            tag: 'SALE',
            src: '/Images/menu1.jpg'
        },
        {
            name: 'Mushroom Pizza',
            price: 25.00,
            tag: '',
            src: '/Images/menu2.jpg'
        },
        {
            name: 'Hawaiian Pizza',
            price: 30.00,
            tag: 'NEW',
            src: '/Images/menu3.jpg'
        },
        {
            name: 'Pesto Pizza',
            price: 30.00,
            oldPrice: 50.00,
            tag: 'SALE',
            src: '/Images/menu4.jpg'
        }
    ];

    return (
        <div className="bg-dark text-light py-5">
            <Container>
                <h2>Our Menu</h2>
                <Row>
                    {pizzas.map((pizza, i) => (
                        <Col key={i}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={pizza.src} />
                                <Card.Body>
                                    <Card.Title>{pizza.name}</Card.Title>
                                    <Card.Text>
                                        {pizza.oldPrice ? (
                                            <>
                                                <span style={{ textDecoration: "line-through", }}                                                >
                                                    ${pizza.oldPrice.toFixed(2)}
                                                </span>
                                                <span style={{ color: "orange" }}>
                                                    ${pizza.price.toFixed(2)}
                                                </span>
                                            </>
                                        ) : (
                                            <span>
                                                ${pizza.price.toFixed(2)}
                                            </span>
                                        )}
                                    </Card.Text>
                                    <Button variant="dark" className="w-100">Buy</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Menu;