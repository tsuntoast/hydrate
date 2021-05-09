import { changeToML, changeToOz } from '../actions/actionTypes';

const initialState = {
   unit: 'oz'
};

const unitReducer = (state = initialState, action) => {

   switch (action.type) {

      case changeToOz:

         if (state.unit === 'mL') {
            return { ...state, unit: 'oz' };
         }
         else {   // need to return state or else it will continue reading!
            return state;
         }

      case changeToML:

         if (state.unit === 'oz') {
            return { ...state, unit: 'mL' };
         }
         else {
            return state;
         }

      default:
         return state;

   }

};

export default unitReducer;