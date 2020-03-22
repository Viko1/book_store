import React from 'react';
import {Menu} from 'semantic-ui-react'


const menuComponent = () => (
    <Menu>
                    <Menu.Item
                        name='browse'

                    >
                        Book Shop
                    </Menu.Item>



                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='signup'

                        >
                            Sum: &nbsp; <b>0</b> zł.
                        </Menu.Item>

                        <Menu.Item
                            name='help'

                        >
                            Cart (<b>0</b>)
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
);


export default menuComponent;