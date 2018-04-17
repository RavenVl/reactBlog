import React, {Component} from 'react';
// import logo from './logo.svg';
import BlogContainer from './components/BlogContainer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="demo-ribbon">
                    <div className="demo-header">
                        <div>
                            <h3>Country News</h3>
                            <div>Top stories of my country</div>
                        </div>
                        <div className="left-header">
                            <div className="icon-container">
                                <i className="fas fa-user"></i>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                                <i className="fab fa-vk"></i>
                            </div>
                            <div className="header-link">
                                <div>Link1</div>
                                <div>Link2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <BlogContainer />
            </div>

        );
    }
}

export default App;

