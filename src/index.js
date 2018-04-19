import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './data/storage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
class Main extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
            )

    }
}
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
