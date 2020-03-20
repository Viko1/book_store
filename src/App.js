import React, {Component} from 'react';
import {connect} from "react-redux";
import {setBooks} from './actions/books'
import books from '../public/books.json'
import axios from 'axios'

// function App(props) {
//     const {books} = this.props.books;
//     return (
//         <div>
//             <h1>{books[0].title}</h1>
//         </div>
//     );
// }

class App extends Component {
    componentWillMount() {
        const {setBooks} = this.props
        axios.get('/books.json').then(response => {
            setBooks(response.data)
        })
    }

    render() {
        const {books} = this.props;
        return (
            <ul>
                {
                    books.map(book => (
                        <li><b>{book.title}</b> - {book.author}</li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => ({
    books: books.items
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
