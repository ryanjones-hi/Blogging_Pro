import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers';

import PostsIndex from './containers/posts_index';
import AddPost from './containers/addPost';
import PostShow from './containers/postShow';


// let store = createStore(reducers)
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                 <h2 className="jumbotron text-center"> Online Blogging</h2>
                <Switch>
                    <Route path="/add" component={AddPost} />
                    <Route path="/show/:id" component={PostShow} />
                    <Route path="/" component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
