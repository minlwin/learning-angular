import { createReducer, on } from "@ngrx/store";
import * as LocationActions from "./location.actions";
import { LocationModel } from "./location.model";

function generateModel() {
    return {
        regions: [],
        states: [],
        districts: [],
        townships: []
    }
}

const STATE: LocationModel = generateModel()

const reduceLocation = createReducer(STATE,
    on(LocationActions.CLEAR_ALL, state => generateModel()),
    on(LocationActions.CLEAR_RESULTS, state => {
        return { ...generateModel(), regions: state.regions }
    }),
    on(LocationActions.REGION_LOAD_SUCCESS, (state, result) => {
        return { ...state, regions: result.payload }
    }),
    on(LocationActions.STATE_LOAD_SUCCESS, (state, result) => {
        return { ...state, states: result.payload }
    }),
    on(LocationActions.DISTRICT_LOAD_SUCCESS, (state, result) => {
        return { ...state, districts: result.payload }
    }),
    on(LocationActions.TOWNSHIP_LOAD_SUCCESS, (state, result) => {
        return { ...state, townships: result.payload }
    }),
)

export function reduceAppState(state: any, action: any) {
    return reduceLocation(state, action)
}