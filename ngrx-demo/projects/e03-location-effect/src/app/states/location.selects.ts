import { createSelector } from "@ngrx/store";
import { AppState, District, State, Township } from "./location.model";

export const selectAllTownships = (state: AppState) => state.townshipModel
export const selectAllTargets = (state: AppState) => state.targetModel

const selectAllStates = createSelector(
    selectAllTownships, townships => distinct(townships
        .map(a => a.district.state)).filter(a => a).map(a => a as State)
)

const selectAllDistricts = createSelector(
    selectAllTownships,
    list => distinct(list.map(a => a.district)).filter(a => a).map(a => a as District)
)

export const selectTargetTownships = createSelector(
    selectAllTargets,
    selectAllTownships,
    (targets, list) => targets.map(id => list.filter(a => a.id == id)[0]))

export const selectTownshipsByDistrict = createSelector(
    selectAllTownships,
    selectAllTargets,
    (list: ReadonlyArray<Township>, targets: ReadonlyArray<number>, district: any) =>
        list.filter(a => a.district.id === Number(district))
            .filter(a => targets.filter(id => id === a.id).length == 0)
)

export const selectAllRegions = createSelector(
    selectAllTownships,
    list => [... new Set(list.map(a => a.district.state.region))]
)


export const selectStatesByRegion = createSelector(
    selectAllStates,
    (list: ReadonlyArray<State>, region: string) => list.filter(a => a.region === region)
)

export const selectDistrictByState = createSelector(
    selectAllDistricts,
    (list: ReadonlyArray<District>, id: string) => list.filter(a => a.state.id === Number(id))
)

const distinct = (source: ReadonlyArray<{ id: number }>) =>
    source.map(a => a.id).filter((value, index, array) =>
        index === array.findIndex(a => a === value))
        .map(id => source.find(a => a.id == id))