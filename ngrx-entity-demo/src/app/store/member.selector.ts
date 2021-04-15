import { createFeatureSelector, createSelector } from '@ngrx/store'
import { MemberState } from './member.model'
import * as fromMember from './member.reducer'
import * as router from './router.select'

const memberState = createFeatureSelector<MemberState>('members')

export const SELECTED_MEMBER = createSelector(
    memberState,
    router.selectRouteParams,
    (state, params) => params['id'] ? state.entities[params['id']] : null)

export const FILTER = createSelector(
    memberState,
    state => state.filter)

const allEntity = fromMember.adapter.getSelectors().selectAll
const allMembers = createSelector(memberState, allEntity)

export const FILTERED_MEMBER = createSelector(
    allMembers,
    FILTER,
    (members, filter) => members.filter(m =>
        !(filter.name && m.name !== filter.name) && !(filter.role && m.role !== filter.role))
)