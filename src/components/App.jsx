import React, {Component} from 'react';
import axios from 'axios'
import BookCart from '../containers/BookCart'
import Filter from '../containers/Filter'
import Menu from '../containers/Menu'
import {Container, Card} from 'semantic-ui-react'


class App extends Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data)
        })
    }

    render() {
        const {books, isReady, setFilter} = this.props;
        return (


            <Container>

                <Menu/>
                <Filter/>
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Loading...'
                        : books.map((book, i) => <BookCart key={i} {...book}/>
                        )
                    }
                </Card.Group>

            </Container>

        )
    }
}

export default App;
