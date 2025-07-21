// import * as types from "./types";

// const initialState = {
//   loading: false,
//   error: false,
//   reports: [],
//   beds: [],
//   doctors: [],
//   patients: [],
//   nurses: [],
//   dashboard: [],
//   Appointments: [],
// };

// export default function dataReducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case types.GET_BED_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case types.GET_BED_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         beds: payload,
//       };
//     case types.GET_PATIENT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         patients: payload,
//       };
//       case type.GET_DOCTOR_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         patients: payload,
//       };
//     case types.GET_ALLDATA_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         dashboard: payload,
//       };
//     case types.DISCHARGE_PATIENT_SUCCESS:
//       let data = state.beds.map((ele) => {
//         if (ele._id === payload.bed._id) {
//           return payload.bed;
//         }
//         return ele;
//       });
//     case types.DELETE_APPOINTMENT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         Appointments: state.Appointments.filter((ele) => ele._id !== payload),
//       };
//     case types.GET_APPOINTMENT_DETAILS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         Appointments: payload,
//       };

//     default:
//       return state;
//   }
// }

import * as types from "./types";

const initialState = {
  loading: false,
  error: false,
  reports: [],
  beds: [],
  doctors: [],
  patients: [],
  nurses: [],
  dashboard: [],
  Appointments: [],

};

export default function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_BED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_BED_SUCCESS:
      return {
        ...state,
        loading: false,
        beds: payload,
      };
    case types.GET_PATIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        patients: payload,
      };

      case types.GET_AMBULANCES_SUCCESS:
        return {
          ...state,
          loading: false,
          ambulance: payload,
        };
      case types.GET_NURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        nurses: payload,
      };

    case types.GET_DOCTOR_SUCCESS: // Corrected typo here
      return {
        ...state,
        loading: false,
        doctors: payload, // Corrected payload key here
      };
    case types.GET_ALLDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dashboard: payload,
      };
    case types.DISCHARGE_PATIENT_SUCCESS:
      let updatedBeds = state.beds.map((ele) => {
        if (ele._id === payload.bed._id) {
          return payload.bed;
        }
        return ele;
      });
      return {
        ...state,
        loading: false,
        beds: updatedBeds,
      };
    case types.DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        Appointments: state.Appointments.filter((ele) => ele._id !== payload),
      };
    case types.GET_APPOINTMENT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        Appointments: payload,
      };

    default:
      return state;
  }
}
