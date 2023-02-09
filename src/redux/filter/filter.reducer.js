// ======== NOT NEEDED WITH SLICE:

// import { createReducer } from "@reduxjs/toolkit";
// import { filterAction } from "./filter.actions";
// import { filterInitState } from "./filter.init-state";


// // ================ VANILLA REDUX:

// // export const filterReducer = (state = filterInitState, action) => {
// //     switch (action.type) {
// //         case FILTER: return action.payload;
// //         default: return state;
// //         }
// // };

// // ================ WITHOUT BUILDER:

// // export const filterReducer = createReducer(filterInitState, {
// //     [FILTER]: (state, { payload }) => payload,
// // })

// export const filterReducer = createReducer(filterInitState, builder => {
//     builder.addCase(filterAction, (state, { payload }) => payload)
// })