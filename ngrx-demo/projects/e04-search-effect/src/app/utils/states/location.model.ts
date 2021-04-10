import { District } from "../services/district.service";
import { State } from "../services/state.service";
import { Township } from "../services/township.service";

export interface LocationModel {
    readonly regions: ReadonlyArray<string>
    readonly states: ReadonlyArray<State>
    readonly districts: ReadonlyArray<District>
    readonly townships: ReadonlyArray<Township>
}

export interface LocationState {
    locations: LocationModel
}

