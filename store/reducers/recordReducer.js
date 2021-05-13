import {addLog, convertLogsToOz, convertLogsToML} from '../actions/actionTypes';

const initialState = {
   logs: [],
   logKey: 0,     // Keeps track of number to assign to a log's key
   dayCount: 0,
   weekCount: 0,
   monthCount: 0,
};

const recordReducer = (state = initialState, action) => {

   switch (action.type) {

      case addLog:
         var currentDate = action.payload.timeLog;    // new Date()

         // Get time out of date to push as timeLog
         var hours = (currentDate.getHours() > 12) ? currentDate.getHours() - 12
                     : currentDate.getHours() === 0 ? 12 : currentDate.getHours();
         var mins = (currentDate.getMinutes() < 10) ? "0" + currentDate.getMinutes()
                     : currentDate.getMinutes();
         var am_pm = currentDate.getHours() >= 12 ? "PM" : "AM";

         var currentTime = hours + ":" + mins + " " + am_pm;
         action.payload.timeLog = currentTime;

         let copyOfLogs = [...state.logs];
         copyOfLogs.push(action.payload);

         return {...state,
            logs: copyOfLogs,
            logKey: (state.logKey + 1),
            dayCount: (state.dayCount + action.payload.amount),
            weekCount: (state.weekCount + action.payload.amount),
            monthCount:(state.monthCount + action.payload.amount)};

      //case deleteLog:
         // maybe

      case convertLogsToOz:
         let logsToOz = [...state.logs];
         let newDayOz = 0;
         for (let i = 0; i < logsToOz.length; i++) {
            logsToOz[i].amount = Number((logsToOz[i].amount * 0.0338).toFixed());
            newDayOz = newDayOz + logsToOz[i].amount;
            // Account for converting week/month counts too, return new counts
         }

         return {...state, logs: logsToOz, dayCount: newDayOz};

      case convertLogsToML:
         let logsToML = [...state.logs];
         let newDayML = 0;
         for (let i = 0; i < logsToML.length; i++) {
            logsToML[i].amount = Number((logsToML[i].amount * 29.573).toFixed());
            newDayML = newDayML + logsToML[i].amount;
            // Account for converting week/month counts too, return new counts
         }

         return { ...state, logs: logsToML, dayCount: newDayML };

      default:
         return state;

   }

};

export default recordReducer;