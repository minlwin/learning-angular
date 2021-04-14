import { createFeatureSelector, createSelector } from '@ngrx/store'
import { MemberState } from './member.model'
import * as fromMember from './member.reducer'


const memberState = createFeatureSelector<MemberState>('members')

export const ALL_MEMBERS = createSelector(memberState, fromMember.SELECT_ALL_MEMBERS)

export const SELECTED_ID = createSelector(
    memberState,
    state => state.selectedMemberId)

export const SELECTED_MEMBER = createSelector(
    memberState,
    SELECTED_ID,
    (state, id) => id ? state.entities[id] : null)

export const FILTER = createSelector(
    memberState,
    state => state.filter)

export const FILTERED_MEMBER = createSelector(
    ALL_MEMBERS,
    FILTER,
    (members, filter) => members.filter(m =>
        !(filter.name && m.name !== filter.name) && !(filter.role && m.role !== filter.role))
)