import React from 'react';

import '../css/toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">BookStore</a></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Products</a> </li>
                    <li><a href="/">Users</a> </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;