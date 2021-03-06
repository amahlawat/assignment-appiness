import * as actionTypes from '../actions';

const intialState = {
    isUserAuthenticated: false
};

const reducer = (state=intialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN: 
            return{
                isUserAuthenticated: action.value
            }
        default:
            return state;
    }
}

export default reducer;