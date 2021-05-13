import {addCount} from '../actions/actionTypes';

const initialState = {
   count: 0,
   weekCount: 0,
   monthCount: 0,
};

const countReducer = (state = initialState, action) => {

   switch (action.type) {

      case addCount:
         let copyOfState = {...state, count:(state.count + action.value),
                                       weekCount:(state.weekCount + action.value),
                                       monthCount:(state.monthCount + action.value) }; 
         return copyOfState;

      default:
         return state;

   }

};

export default countReducer;