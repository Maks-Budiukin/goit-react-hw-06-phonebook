import { createAction } from "@reduxjs/toolkit"


// ================= VANILLA REDUX:

// export const filterAction = payload => ({ type: FILTER, payload })

export const filterAction = createAction('FILTER');