import React, {Component} from 'react';
import axios from 'axios'
import Menu from './Menu'
import BookCard from './BookCard'
import Filter from './Filter'
import {Container, Card} from 'semantic-ui-react'


class App extends Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data)
        })
    }

    render() {
        const {books, isReady} = this.props;
        return (

            <Container>
                <Menu/>
                <Filter/>
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Loading...'
                        : books.map((book, i) => <BookCard key={i} {...book}/>
                        )
                    }
                </Card.Group>

            </Container>

        )
    }
}

export default App;
