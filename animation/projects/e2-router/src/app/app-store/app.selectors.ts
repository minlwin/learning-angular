import { createFeatureSelector, createSelector } from "@ngrx/store";
import { District, DomainModel, FilterModel, SearchModel } from "./app.model";

const domain = createFeatureSelector<DomainModel>('domain')
const search = createFeatureSelector<SearchModel>('search')
const filter = createFeatureSelector<FilterModel>('filter')


export const regions = createSelector(domain, d => [... new Set(Object.values(d.states).map(a => a.region))])

export const statesForResult = createSelector(
    domain, search,
    (d, s) => Object.values(d.states).filter(a =>
        s.search && (s.region ? a.region === s.region : true
            && s.name ? a.name.toLocaleLowerCase().startsWith(s.name.toLocaleLowerCase()) : true))
)

export const statesForFilter = createSelector(
    domain, filter,
    (d, s) => Object.values(d.states).filter(a => a.region === s.region)
)

const districtsWithState = createSelector(
    domain,
    domain => Object.values(domain.districts).map(a => ({
        ...a,
        state: domain.states[a.state]
    }))
)

export const districtsForFilter = createSelector(
    districtsWithState, filter,
    (domain, search) => domain.filter(a => {
        if ((search.state && Number(search.state) === a.state.id)
            && (search.region && search.region == a.state.region)) {
            return true
        }
        return false
    })
)

export const districtsForResult = createSelector(
    districtsWithState, search,
    (domain, search) => domain.filter(a => {
        if (!search.search
            || (search.state && Number(search.state) !== a.state.id)
            || (search.region && search.region !== a.state.region)
            || (search.name && !a.name.toLocaleLowerCase().startsWith(search.name.toLocaleLowerCase()))
        ) {
            return false
        }
        return true
    })
)

const districtWithStateMap = createSelector(
    districtsWithState,
    domain => {
        const result: { [id: number]: District } = []
        domain.forEach(a => result[a.id] = a)
        return result
    }
)

const townshipsWithDistrict = createSelector(
    domain,
    districtWithStateMap,
    (domain, districts) => Object.values(domain.townships)
        .map(a => ({ ...a, district: districts[a.district] }))
)

export const townshipsForFilter = createSelector(
    townshipsWithDistrict, filter,
    (domain, search) => domain.filter(a => {
        if ((search.district && Number(search.district) == a.district.id)
            && (search.state && search.state == a.district.state?.id)
            && (search.region && search.region == a.district.state?.region)) {
            return true
        }
        return false
    })
)

export const townshipsForResult = createSelector(
    townshipsWithDistrict, search,
    (domain, search) => domain.filter(a => {
        if (!search.search
            || (search.district && Number(search.district) !== a.district.id)
            || (search.state && Number(search.state) !== a.district.state.id)
            || (search.region && search.region !== a.district.state.region)
            || (search.name && !a.name.toLocaleLowerCase().startsWith(search.name.toLocaleLowerCase()))
        ) {
            return false
        }
        return true
    })
)