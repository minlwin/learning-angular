import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { Category } from "../dto/category.dto";
import { Repository } from "../repo/repository";

const API = `${environment.api.url}/category`

@Injectable({ providedIn: 'root' })
export class CategoryService {

    private repo: Repository

    constructor(http: HttpClient) {
        this.repo = new Repository(http, API)
    }

    findById(id: string): Observable<Category> {
        return this.repo.findById(id).pipe(
            tap(a => console.log(a)),
            map(a => a as Category)
        )
    }

    search(form: any = null): Observable<Category[]> {

        const params: any = {}
        const where = this.where(form)

        if (where) {
            params['where'] = JSON.stringify(where)
        }

        return this.repo.search(params).pipe(
            map(a => a.results)
        )
    }

    save(data: Category): Observable<Category[]> {
        const result = data.objectId ? this.repo.update(data) : this.repo.create(data)

        return result.pipe(
            switchMap(a => this.search())
        )
    }

    private where(form: any) {

        if (form && form.name) {
            const { name, ...other } = form
            return { name: { "$text": { "$search": { "$term": name } } } }
        }

        return null
    }
}