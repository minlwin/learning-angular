import { HttpClient } from "@angular/common/http";

const BASE = "http://localhost:8080"

export abstract class AbstractService<T extends { id: number }> {

    constructor(protected http: HttpClient, private resource: string) { }

    protected get api() {
        return `${BASE}/${this.resource}`
    }

    search(form: any) {
        return this.http.get<T[]>(this.api, { params: form })
    }

    findById(id: number) {
        return this.http.get<T>(`${this.api}/${id}`)
    }

    save(data: T) {
        return data.id ? this.update(data) : this.create(data)
    }

    private create(data: T) {
        return this.http.post<T>(this.api, data)
    }

    private update(data: T) {
        return this.http.put<T>(`${this.api}/${data.id}`, data)
    }
}

export type BalanceType = 'Income' | 'Expense'