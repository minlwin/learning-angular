import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as Action from "./member.action";
import { Member, MemberFilter, MemberState } from "./member.model";

export const adapter: EntityAdapter<Member> = createEntityAdapter<Member>({
    selectId: m => m.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name)
})

const INITIAL_FILTER: MemberFilter = { name: '', role: '' }

const INITIAL_STATE: MemberState = adapter.getInitialState({
    filter: INITIAL_FILTER
})

const reducer = createReducer(
    INITIAL_STATE,
    on(Action.create, (state, { member }) => adapter.addOne(member, state)),
    on(Action.update, (state, { update }) => adapter.updateOne(update, state)),
    on(Action.remove, (state, { id }) => adapter.removeOne(id, state)),
    on(Action.setFilter, (state, { filter }) => ({ ...state, filter: filter })),
    on(Action.reSetFilter, state => ({ ...state, filter: { ...INITIAL_FILTER } })),
)

export function reduceMember(state: any, action: any) {
    return reducer(state, action)
}

