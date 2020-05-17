import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'
import {setSearchQuery} from "../actions/filter";
import {Button} from 'reactstrap'

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {

    return (
        <div className='filter-button'>
            <Button
                name='all'
                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}
            >All</Button>
            <Button
                name='price_high'
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this, 'price_high')}
            >Sort by high price</Button>
            <Button
                name='price_low'
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}
            >Sort by low price</Button>
            <Button
                name="author"
                active={filterBy === 'author'}
                onClick={setFilter.bind(this, 'author')}
            >Author</Button>
            <span className='search_box'>
                <Input className='search_input' onChange={event => setSearchQuery(event.target.value)} icon='search' value={searchQuery}
                       placeholder='Search'/>
            </span>


        </div>
    )
};



export default Filter;
