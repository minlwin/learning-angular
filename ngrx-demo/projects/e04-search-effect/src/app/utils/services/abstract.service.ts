import { HttpClient } from "@angular/common/http";

export const API = 'http://localhost:8080'

export abstract class AbstractService<T> {

    constructor(protected http: HttpClient, protected resource: string) { }

    search(form: any) {
        return this.http.get<T[]>(`${API}/${this.resource}`, { params: form })
    }
}