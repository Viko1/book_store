import React, {Component} from 'react';
import {connect} from "react-redux";

function App(props) {
    const {books} = this.props.books;
    return (
        <div>
            <h1>{books[0].title}</h1>
        </div>
    );
}

// class App extends Component {
//     render() {
//         const { books } = this.props.books;
//         return (
//             <div>
//                 <h1>{books[0].title}</h1>
//             </div>
//         );
//     }
// }

const mapState = state => ({
    ...state
});

export default connect(mapState)(App);
