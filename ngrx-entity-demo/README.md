# NgRX Entity Demo Project

This project is written to learn NgRX Entity. 
If we are using NgRx Store, there are alots of boiler-plate codes to maintain state.
NgRX Entity support EntityAdapter to write reducer in easy way.

EntityAdapter support helper functions to manipulate collection of domain object. 


### Entity (Domain Type)

Entity must contain id property, and type should be string or number.

```
export type Role = 'Admin' | 'Editor' | 'Member'

export interface Member {
    id: number
    name: string
    phone: string
    email: string
    role: Role
}
```

## EntityState

We have to define EntityState Interface to use EntityAdapter in our project.

```
export interface MemberState extends EntityState<Member> {
    // Extra Properties for Member State
    filter: MemberFilter
}
```

EntityState interface has two properties. 

```
export interface EntityState<T> {
    ids: string[] | number[];
    entities: Dictionary<T>;
}
```

## EntityAdapter

EntityAdapter support helper functions to reduce collection of entity. 

```
export const adapter: EntityAdapter<Member> = createEntityAdapter<Member>({
    selectId: m => m.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name)
})
```

We can use EntityAdapter in reducer function.

```
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
```

## EntityAdapter in Selectors

We can also use EntityAdapter to Select Entity from State.

```
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
```
