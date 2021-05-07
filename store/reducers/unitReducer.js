import { changeToML, changeToOz } from '../actions/actionTypes';

const initialState = {
   units: 'oz'
};

const unitReducer = (state = initialState, action) => {

   switch (action.type) {

      case changeToOz:
         //const currentUnits = state.units;

         if (state.units === 'mL') {
            const updatedUnits = 'oz';
            return { ...state, units: 'oz' };
         }

      case changeToML:

         if (state.units === 'oz') {
            console.warn("oz changed to ML");
            const updatedUnits = 'mL';

            return { ...state, units: 'mL' };

         }
      // else if (currentUnits === 'mL') {
      //    const updatedUnits = 'oz';

      //    return { ...state, units: updatedUnits };
      // }

      default:
         return state;

   }

};

export default unitReducer;