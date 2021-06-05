import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ApiClient } from "../client/api-client";
import { SecurityContext } from "./security-context";

@Injectable({ providedIn: 'root' })
export class SignInService {

    private client: ApiClient

    constructor(http: HttpClient, private security: SecurityContext) {
        this.client = new ApiClient(http, 'login')
    }

    signIn(form: any): Observable<boolean> {

        return this.client.get(form, environment.api.createSessionKey).pipe(
            tap(resp => {
                this.security.login(resp)
            }),
            map(resp => resp.sessionToken)
        )
    }
}