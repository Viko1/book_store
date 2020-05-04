import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


import './toolbar.css'
import Menu from "../../containers/Menu";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawlerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/"><img src='https://www.freelogodesign.org/file/app/client/thumb/558a6a25-9666-428b-ae6c-d57f628a772b_200x200.png?1588627496020'/> </a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation_items">
                <ul>
                    <Menu/>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;



