import { getSelectors, RouterReducerState } from '@ngrx/router-store'
import { createFeatureSelector } from '@ngrx/store'

const selectRouter = createFeatureSelector<RouterReducerState>('router')

export const { selectQueryParams, selectRouteParams } = getSelectors(selectRouter)