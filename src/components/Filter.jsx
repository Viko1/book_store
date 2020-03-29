import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'

const Filter = ({setFilter, filterBy}) => {

    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}
            >All</Menu.Item>
            <Menu.Item
                name='price_high'
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this, 'price_high')}
            >Sort by high price</Menu.Item>
            <Menu.Item
                name='price_low'
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}
            >Sort by low price</Menu.Item>
            <Menu.Item
                name="author"
                active={filterBy === 'author'}
                onClick={setFilter.bind(this, 'author')}
            >Author</Menu.Item>
        </Menu>
    )
};

export default Filter;