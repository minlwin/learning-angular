import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { State } from "projects/e03-location-effect/src/app/states/location.model";
import { AbstractService } from "./abstract.service";

export interface District {
    readonly id: number
    readonly name: string
    readonly state: State
    readonly mmName: string
    readonly capital?: string
}

@Injectable({ providedIn: 'root' })
export class DistrictService extends AbstractService<District> {
    constructor(http: HttpClient) {
        super(http, 'district')
    }
}