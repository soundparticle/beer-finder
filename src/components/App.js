import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'; 
import Header from './Header';
import Home from './Home';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <Header onSearch={this.handleSearch}/>
                        <h1>Beer finder</h1>
                    </header>

                    <main>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            {/* <Route exact path="/favorites" Component={Favorites}/> */}
                            {/* {Route exact path="/results" component={Results}/> */}
                            <Redirect to="/"/>
                        </Switch>
                    </main>
                
                </div>

            </Router>
        );
    }
}

export default App;
