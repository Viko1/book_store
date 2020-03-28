import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'

 class Filter extends Component {
    state = {activeItem: 'all'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <Menu secondary>

                <Menu.Item
                    name='all'
                    active={activeItem === 'all'}
                    onClick={this.handleItemClick}
                >All</Menu.Item>
                <Menu.Item
                    name='popular'
                    active={activeItem === 'popular'}
                    onClick={this.handleItemClick}
                >Popular</Menu.Item>
                <Menu.Item
                    name='price_high'
                    active={activeItem === 'price_high'}
                    onClick={this.handleItemClick}
                >Sort by high price</Menu.Item>
                <Menu.Item
                    name='price_low'
                    active={activeItem === 'price_low'}
                    onClick={this.handleItemClick}
                >Sort by low price</Menu.Item>
                <Menu.Item
                    name="author"
                    active={activeItem === 'author'}
                    onClick={this.handleItemClick}
                >Author</Menu.Item>

            </Menu>
        )
    }
}

export default Filter;