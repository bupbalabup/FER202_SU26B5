import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    const slides = [
        {
            src: '/Images/pizza1.jpg',
            title: 'Neapolitan Pizza',
            desc: 'Traditional Italian pizza with fresh ingredients and crispy crust.'
        },
        {
            src: '/Images/pizza2.jpg',
            title: 'Chicago Deep Dish',
            desc: 'Thick, cheesy, and baked to perfection — a true Chicago classic.'
        },
        {
            src: '/Images/pizza3.jpg',
            title: 'New York Slice',
            desc: 'Thin crust, cheesy goodness, and easy to fold on the go.'
        },
        {
            src: '/Images/pizza4.jpg',
            title: 'Pepperoni Deluxe',
            desc: 'Loaded with spicy pepperoni and gooey mozzarella cheese.'
        },
        {
            src: '/Images/pizza5.jpg',
            title: 'Veggie Paradise',
            desc: 'A healthy mix of veggies and cheese on a crispy base.'
        }
    ];


    const CarouselImage = ({ src, alt }) => (
        <img
            className="d-block w-100"
            src={src}
            alt={alt}
        />
    );

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {slides.map((slide, i) => (
                <Carousel.Item key={i}>
                    <CarouselImage src={slide.src} />
                    <Carousel.Caption>
                        <h3>{slide.title}</h3>
                        <p>{slide.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;