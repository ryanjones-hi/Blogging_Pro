import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


import PostReducer from './posts_reducer';
import ActivePostReducer from './activePost_reducer';

const rootReducer = combineReducers({
    
    posts: PostReducer,
    activePost: ActivePostReducer,
    form: formReducer 
})

export default rootReducer;