import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class Repository {

    constructor(private http: HttpClient, private api: string) { }

    findById(id: string, params: any = {}): Observable<any> {
        return this.http.get(`${this.api}/${id}`, { params: params })
    }

    search(params: any = {}): Observable<any> {
        return this.http.get(this.api, { params: params })
    }

    create(data: any): Observable<any> {
        return this.http.post(this.api, data)
    }

    update(data: any): Observable<any> {
        return this.http.put(`${this.api}/${data.objectId}`, data)
    }
}