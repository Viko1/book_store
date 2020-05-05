import React from 'react'
import './sideDrawer.css'
import Menu from "../../containers/Menu";

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = ['side-drawer open']
    }

    return (
        <nav className={drawerClasses}>
            <ul className='Menu '>
                <li><Menu/></li>
            </ul>
        </nav>)

};

export default sideDrawer;
