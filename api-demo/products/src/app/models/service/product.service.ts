import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Product } from "../dto/product.dto";
import { Repository } from "../repo/repository";

const API = `${environment.api.url}/product`

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private repo: Repository

    constructor(http: HttpClient) {
        this.repo = new Repository(http, API)
    }

    save(data: Product): Observable<Product> {
        return this.setPointer(data).pipe(
            tap(a => console.log(a)),
            switchMap(dto => dto.objectId ? this.repo.update(dto) : this.repo.create(dto)),
            switchMap(response => this.findById(response.objectId)),
        )
    }

    search(form: any): Observable<Product[]> {
        const where = this.where(form)
        const params: any = {
            include: 'category'
        }

        if (where) {
            params['where'] = JSON.stringify(where)
        }

        return this.repo.search(params).pipe(
            map(a => a.results)
        )
    }

    findById(id: string): Observable<Product> {
        return this.repo.findById(id, { include: 'category' })
    }

    private setPointer(data: Product): Observable<any> {
        const { category, ...others } = data
        return of({
            ...others,
            category: {
                "__type": "Pointer",
                "className": "category",
                "objectId": category.objectId
            }
        })
    }

    private where(form: any) {

        const where: any = {}
        const price: any = {}

        if (form && form.category) {
            where['category'] = {
                "__type": "Pointer",
                "className": "category",
                "objectId": form.category
            }
        }

        if (form && form.name) {
            where['name'] = { "$regex": `^${form.name}` }
        }

        if (form && form.from) {
            price["$gte"] = form.from
        }

        if (form && form.to) {
            price["$lte"] = form.to
        }

        if (Object.keys(price).length) {
            where['price'] = price
        }

        return Object.keys(where).length ? where : null
    }

}