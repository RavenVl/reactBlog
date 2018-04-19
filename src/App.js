import React, {Component} from 'react';
// import logo from './logo.svg';
import BlogContainer from './components/BlogContainer';
import Header from './components/Header';
import Foto from './components/Foto';
import './App.css';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={BlogContainer}/>
                    {/* Оба /roster и /roster/:number начинаются с /roster */}
                    <Route path='/foto' component={Foto}/>
                </Switch>
            </div>

        );
    }
}

export default App;

