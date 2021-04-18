export interface State {
    id: number
    region: string
    name: string
    mmName: string
    capital: string
}

export interface District {
    id: number
    state: any
    name: string
    mmName: string
    capital: string
}

export interface Township {
    id: number
    district: any
    name: string
    mmName: string
}

export interface DomainModel {
    states: { [id: number]: State }
    districts: { [id: number]: District }
    townships: { [id: number]: Township }
}

export interface SearchModel {
    region?: string
    state?: string
    district?: string
    name?: string
    search: boolean
}

export interface FilterModel {
    region?: string
    state?: string
    district?: string
}


export interface StoreModel {
    domain: DomainModel,
    search: SearchModel
    filter: FilterModel
}

export function getInitialDomain(): DomainModel {
    return {
        states: {},
        districts: {},
        townships: {}
    }
}

export function getInitialSearch(): SearchModel {
    return {
        region: '',
        state: '',
        district: '',
        name: '',
        search: false
    }
}

export function getInitialFilter(): FilterModel {
    return {
        region: '',
        state: '',
        district: ''
    }
}