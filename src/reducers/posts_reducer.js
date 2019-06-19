import {FETCH_POST} from '../actions';
import {GET_POST} from '../actions';
import {DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state ={}, action){
   
   switch(action.type)
   {
       case FETCH_POST:
        return _.mapKeys(action.payload.data, 'id');

        case GET_POST:
            const post = action.payload.data;
            const newState = {...state};
            newState[post.id] = post;
            return newState;

        case DELETE_POST:
            return _.omit(state, action.payload);

       default:
        return state;
   }

}