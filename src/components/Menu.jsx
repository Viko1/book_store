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
        <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h4 className="text-white">Collapsed content</h4>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
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
    </Menu>
);


export default menuComponent;