import * as ACTION_TYPES from '../actions/actions_types';

const initialState = {
    stateProp1 :false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ACTION_TYPES.SUCCESS :
            return{
                ...state,
                stateProp1 : true
            }
    
        case ACTION_TYPES.FAULEUR : 
            return{
                ...state,
                stateProp1: false
            }
            default : return state 
    }
} 

export default rootReducer;