import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Member, MemberFilter } from "./member.model";

export const create = createAction('[Member] create', props<{ member: Member }>())
export const update = createAction('[Member] update', props<{ update: Update<Member> }>())
export const remove = createAction('[Member] remove', props<{ id: number }>())
export const getAll = createAction('[Member] getAll')

export const setSelected = createAction('[Member] setSelected', props<{ id: number }>())
export const reSetSelected = createAction('[Member] reSetSelected')

export const setFilter = createAction('[Member] setFilter', props<{ filter: MemberFilter }>())
export const reSetFilter = createAction('[Member] reSetFilter')
