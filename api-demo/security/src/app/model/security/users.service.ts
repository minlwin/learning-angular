import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiClient } from "../client/api-client";
import { User } from "./model";

@Injectable({ providedIn: 'root' })
export class UsersService {

    private client: ApiClient

    constructor(private http: HttpClient) {
        this.client = new ApiClient(http, 'users')
    }

    createUser(form: any, signUp: boolean = false) {
        const headers = signUp ? environment.api.createSessionKey : {}
        return this.client.post(form, headers)
    }

    getLoginUser() {
        return this.getUser('me')
    }

    getUser(id: string): Observable<User> {
        return this.client.getOne(id)
    }
}