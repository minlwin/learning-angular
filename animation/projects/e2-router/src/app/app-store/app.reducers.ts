import { createReducer, on } from "@ngrx/store";
import * as Action from './app.actions';
import { District, getInitialDomain, getInitialFilter, getInitialSearch, State, Township } from "./app.model";


const domainReducer = createReducer(getInitialDomain(),
    on(Action.loadStateSuccess, (state, { payload }) => {
        const states: { [id: number]: State } = {}
        payload.forEach(s => states[s.id] = s)
        return { ...state, states: states }
    }),
    on(Action.loadDistrictSuccess, (state, { payload }) => {
        const districts: { [id: number]: District } = {}
        payload.forEach(s => districts[s.id] = s)
        return { ...state, districts: districts }
    }),
    on(Action.loadTownshipSuccess, (state, { payload }) => {
        const tosnhips: { [id: number]: Township } = {}
        payload.forEach(s => tosnhips[s.id] = s)
        return { ...state, townships: tosnhips }
    }),
)

function reduceDomain(state: any, action: any) {
    return domainReducer(state, action)
}

const searchReducer = createReducer(getInitialSearch(),
    on(Action.clearSearchFilter, _ => getInitialSearch()),
    on(Action.search, (_, { filter }) => ({ ...filter, search: true })),
)

function reduceSearch(state: any, action: any) {
    return searchReducer(state, action)
}

const filterReducer = createReducer(getInitialFilter(),
    on(Action.clearSearchFilter, _ => getInitialFilter()),
    on(Action.addRegionFilter, (last, { filter }) => ({ ...last, region: filter, state: '', district: '' })),
    on(Action.addStateFilter, (last, { filter }) => ({ ...last, state: filter, district: '' })),
    on(Action.addDistrictFilter, (last, { filter }) => ({ ...last, district: filter })),
)

export const appStore = {
    domain: reduceDomain,
    search: reduceSearch,
    filter: filterReducer
}
