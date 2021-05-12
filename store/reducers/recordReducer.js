import {addTimestamp, addRecord} from '../actions/actionTypes';

const initialState = {
   //timestamps: [],
   records: [],
   recordsKey: 0
};

const recordReducer = (state = initialState, action) => {

   switch (action.type) {
      case addTimestamp:
      //    var currentDate = new Date();
      //    var hours = (currentDate.getHours() > 12) ? currentDate.getHours() - 12 : currentDate.getHours();
      //    //hours = hours < 10 ? "0" + hours : hours; // Adding 0 to hours 1-9
      //    var mins = (currentDate.getMinutes() < 10) ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
      //    var am_pm = currentDate.getHours() >= 12 ? "PM" : "AM";

      //    var currentTime = [hours + ":" + mins + " " + am_pm];

      //    let copyOfState = {...state, timestamps:(state.timestamps.concat(currentTime)) }; 
      //    return copyOfState;

      case addRecord:
         var currentDate = action.payload.timeLog;
         var hours = (currentDate.getHours() > 12) ? currentDate.getHours() - 12 : currentDate.getHours() === 0 ? 12 : currentDate.getHours();
         var mins = (currentDate.getMinutes() < 10) ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
         var am_pm = currentDate.getHours() >= 12 ? "PM" : "AM";

         var currentTime = hours + ":" + mins + " " + am_pm;
         action.payload.timeLog = currentTime;

         let copyOfRecords = [...state.records];
         copyOfRecords.push(action.payload);

         return {...state, records: copyOfRecords, recordsKey: state.recordsKey + 1};

      //case deleteRecord:
         // maybe

      default:
         return state;

   }

};

export default recordReducer;