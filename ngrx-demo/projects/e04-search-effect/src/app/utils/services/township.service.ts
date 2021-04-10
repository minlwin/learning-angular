import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract.service";
import { District } from "./district.service";

export interface Township {
    readonly id: number
    readonly name: string
    readonly district: District
    readonly mmName: string
}

@Injectable({ providedIn: 'root' })
export class TownshipService extends AbstractService<Township> {
    constructor(http: HttpClient) {
        super(http, 'township')
    }
}