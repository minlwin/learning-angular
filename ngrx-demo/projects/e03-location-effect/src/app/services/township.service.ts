import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TownshipService {

    constructor(private http: HttpClient) { }

    load() {
        return this.http.get<any[]>('http://localhost:8080/township')
    }
}