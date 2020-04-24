import React from 'react';
import {Menu, List, Popup, Button, Image} from 'semantic-ui-react'

const CartComponent = ({title, id, image, removeFromCart }) => (
    <List divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeFromCart.bind(this, id)} color={"red"}>Remove</Button>
            </List.Content>
            <Image avatar src={image}/>
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

const menuComponent = ({totalPrice, count, items}) => (


    <Menu>
        <Menu.Item name='browse'>
            Book Shop
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item name='signup'>
                Sum: &nbsp; <b>{totalPrice}</b> zł.
            </Menu.Item>
            <Popup
                trigger={
                    <Menu.Item name='help'>
                        Cart (<b>{count}</b>)
                    </Menu.Item>
                }
                content={items.map(book => <CartComponent {...book}/>)}
                on={"click"}
                hideOnScroll
            ></Popup>
        </Menu.Menu>
        <nav className='cart-sticky'>
            <svg xmlns="http://www.w3.org/2000/svg" width="12.686" height="16" viewBox="0 0 12.686 16"><g data-name="Group 2704" transform="translate(-27.023 -2)"><g data-name="Group 17" transform="translate(27.023 5.156)"><g data-name="Group 16"><path data-name="Path 3" d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z" transform="translate(-53.023 -101.005)" fill="currentColor"></path></g></g><g data-name="Group 19" transform="translate(30.274 2)"><g data-name="Group 18"><path data-name="Path 4" d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z" transform="translate(-157.039)" fill="currentColor"></path></g></g></g></svg>
            Cart
        </nav>
    </Menu>
);


export default menuComponent;