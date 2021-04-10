export interface State {
    readonly id: number
    readonly name: string
    readonly mmName: string
    readonly region: string
    readonly capital: string
}

export interface District {
    readonly id: number
    readonly name: string
    readonly mmName: string
    readonly state: State
    readonly capital?: string
}

export interface Township {
    readonly id: number
    readonly name: string
    readonly mmName: string
    readonly district: District
}

export interface FetchResult {
    readonly message: string
    readonly payload: Township[]
}

export interface AppState {
    readonly townshipModel: ReadonlyArray<Township>
    readonly targetModel: ReadonlyArray<number>
}