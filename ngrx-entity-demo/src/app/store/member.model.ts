import { EntityState } from "@ngrx/entity"

export type Role = 'Admin' | 'Editor' | 'Member'

export interface Member {
    id: number
    name: string
    phone: string
    email: string
    role: Role
}

export const ROLES: ReadonlyArray<Role> = ['Admin', 'Editor', 'Member']

export interface MemberFilter {
    role: Role | ''
    name: string
}

export interface MemberState extends EntityState<Member> {
    // Extra Properties for Member State
    filter: MemberFilter
}


