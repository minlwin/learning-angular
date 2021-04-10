import { LocationState } from "./location.model";

export const SELECT_REGIONS = (state: LocationState) => state.locations.regions
export const SELECT_STATES = (state: LocationState) => state.locations.states
export const SELECT_DISTRICTS = (state: LocationState) => state.locations.districts
export const SELECT_TOWNSHIPS = (state: LocationState) => state.locations.townships
