
import { ACTIVE_POST } from '../actions/index'

export default function(state=null, action){
    switch(action.type)
    {
        case ACTIVE_POST:
            return action.payload;

        default:
            return state;
    }

}