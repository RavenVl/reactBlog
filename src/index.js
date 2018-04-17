import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './data/storage';
import { Provider } from 'react-redux';
class Main extends React.Component{
    render(){
        return (
                <Provider store={store}>
                    <App />
                </Provider>
            )

    }
}
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
