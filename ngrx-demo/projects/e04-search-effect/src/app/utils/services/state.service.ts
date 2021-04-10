import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract.service";

export interface State {
    readonly id: number
    readonly name: string
    readonly region: string
    readonly mmName: string
    readonly capital: string
}

@Injectable({ providedIn: 'root' })
export class StateService extends AbstractService<State> {
    constructor(http: HttpClient) {
        super(http, 'state')
    }
}