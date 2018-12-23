import React, { Component } from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom'; 


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        {/* <Header onSearch={this.handleSearch}/> */}
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
