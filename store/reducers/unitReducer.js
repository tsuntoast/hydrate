import { changeToML, changeToOz } from '../actions/actionTypes';

const initialState = {
   unit: 'oz'
};

const unitReducer = (state = initialState, action) => {

   switch (action.type) {

      case changeToOz:
         //const currentUnit = state.unit;

         if (state.unit === 'mL') {
            const updatedUnit = 'oz';
            return { ...state, unit: 'oz' };
         }

      case changeToML:

         if (state.unit === 'oz') {
            console.warn("oz changed to ML");
            const updatedUnit = 'mL';

            return { ...state, unit: 'mL' };

         }
      // else if (currentUnit === 'mL') {
      //    const updatedUnit = 'oz';

      //    return { ...state, unit: updatedUnit };
      // }

      default:
         return state;

   }

};

export default unitReducer;