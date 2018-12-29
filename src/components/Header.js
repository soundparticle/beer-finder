import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Search from './search/Search';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Beer Search</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/favorites">Favorites</Link>
                        </li>
                        <li>
                            <Link to="/beers">Search Beers</Link>
                        </li>
                    </ul>
                </nav>
                <section className="search-container">
                    <Route component={Search}/>
                </section>
            </div>
        );
    }
}

export default Header;