import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export class ApiClient {

    private api: string

    constructor(private http: HttpClient, api: string) {
        this.api = `${environment.api.url}/${api}`
    }

    get(params: any = {}, headers: any = {}) {
        return this.http.get<any>(this.api, { params: params, headers: headers })
    }

    getOne(objectId: string, headers: any = {}) {
        return this.http.get<any>(`${this.api}/${objectId}`, { headers: headers })
    }

    post(data: any, headers: any = {}) {
        return this.http.post<any>(this.api, data, { headers: headers })
    }

    put(id: string, data: any, headers: any = {}) {
        return this.http.put<any>(`${this.api}/${id}`, data, { headers: headers })
    }
}