import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {

    return (
        <div className="carousel_item">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.christenseninstitute.org/wp-content/uploads/2018/03/Books-800-x-400.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Book store</h3>
                        <p>Vitalii Ropiak E-commerce react project</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.yourstory.com/cs/wordpress/2017/04/3-books.jpg?fm=png&auto=format"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Vitalii Ropiak E-commerce react project</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.britmums.com/wp-content/uploads/2018/06/books-800x400.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Vitalii Ropiak E-commerce react project</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;