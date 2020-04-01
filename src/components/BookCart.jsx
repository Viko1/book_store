import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react'

const BookCart = (book) => {
    const {title, author, price, image, addToCart} = book;
    return (
        <Card>
            <Image src={image} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
                <Card.Content extra>
                    <a>
                        <Icon name='euro sign'/>
                        {price}
                    </a>
                </Card.Content>
            </Card.Content>
            <Button onClick={addToCart.bind(this, book)}>Add to cart</Button>
        </Card>

    );
};

export default BookCart;