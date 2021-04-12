import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractService, BalanceType } from "./abstract.service";

export interface Category {
    readonly id: number
    readonly type: BalanceType | ''
    readonly name: string
}

@Injectable({ providedIn: 'root' })
export class CategoryService extends AbstractService<Category> {
    constructor(http: HttpClient) {
        super(http, 'category')
    }
}