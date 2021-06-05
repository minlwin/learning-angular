import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SecurityContext } from "../security/security-context";

@Injectable({ providedIn: 'any' })
export class SessionKeyInterceptor implements HttpInterceptor {

    private sessionKey = environment.api.sessionToken
    constructor(private security: SecurityContext) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.security.sessionToken) {
            return next.handle(req.clone({
                headers: req.headers.append(this.sessionKey, this.security.sessionToken)
            }))
        }

        return next.handle(req)
    }

}