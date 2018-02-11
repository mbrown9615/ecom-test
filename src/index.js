import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

import Store from './components/store/store';
import Cart from './components/cart/cart';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/" component={Store} exact/>
                <Route path="/cart" component={Cart} />
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
