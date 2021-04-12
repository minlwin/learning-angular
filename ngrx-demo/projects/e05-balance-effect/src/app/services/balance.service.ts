import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractService, BalanceType } from "./abstract.service";
import { Category } from "./category.service";

export interface Balance {
    readonly id: number
    readonly useDate: string
    readonly type: BalanceType | ''
    readonly category: Category | ''
    readonly total: number
}

export interface BalanceDetails {
    readonly id: number
    readonly balance?: Balance
    readonly reason: string
    readonly details: string
    readonly amount: number
    readonly deleted: boolean
}

@Injectable({ providedIn: 'root' })
export class BalanceService extends AbstractService<Balance> {
    constructor(http: HttpClient) {
        super(http, 'balance')
    }

    searchDetails(form: any) {
        return this.http.get<BalanceDetails[]>(`${this.api}/details`, { params: form })
    }

    getDetails(balanceId: number) {
        return this.http.get<BalanceDetails[]>(`${this.api}/details/${balanceId}`)
    }

    createDetails(balanceId: number, list: BalanceDetails[]) {
        return this.http.post<Balance>(`${this.api}/details/${balanceId}`, list)
    }

    updateDetails(balanceId: number, list: BalanceDetails[]) {
        return this.http.put<Balance>(`${this.api}/details/${balanceId}`, list)
    }
}