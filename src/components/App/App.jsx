import React, {Component} from 'react';
import axios from 'axios'
import BookCart from '../../containers/BookCart'
import Filter from '../../containers/Filter'
import Menu from '../../containers/Menu'
import {Container, Card} from 'semantic-ui-react'
import ControlledCarousel from "../Carousel";
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'


class App extends Component {
    state = {
        sideDrawerOpen: false
    };


    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data)
        })
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    };

    render() {
        const {books, isReady, setFilter} = this.props;

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }


        return (
            <div className='main_page'>

                <div className="background_img" style={{backgroundImage: 'url(' + 'https://www.pixelstalk.net/wp-content/uploads/images1/Wallpaper-book-1920x1080.jpg' + ')'}}>
                    <div className="center_background_div">
                        <h1 className="center_background_text">Your own books store</h1>
                        <span className="center_background_sub_text">Get your favorite books from our wide range of books.</span>
                        <div className="Search">
                            <Filter/>
                        </div>

                    </div>
                </div>


                <Container className='main_page_container'>
                    <Toolbar drawlerClickHandler={this.drawerToggleClickHandler}/>
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backdrop}
                    {/*<ControlledCarousel/>*/}
                    <Filter/>
                    <Card.Group itemsPerRow={4} doubling='True'>
                        {!isReady
                            ? 'Loading...'
                            : books.map((book, i) => <BookCart key={i} {...book}/>
                            )
                        }
                    </Card.Group>

                </Container>
            </div>

        )
    }
}

export default App;
