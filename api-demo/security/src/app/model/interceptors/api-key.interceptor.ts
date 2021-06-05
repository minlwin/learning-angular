import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class ApiKeyInterceptor implements HttpInterceptor {

    private apiKey = environment.api.apiKey;
    private appId = environment.api.appId;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req.clone({
            headers: req.headers
                .append(this.appId.key, this.appId.value)
                .append(this.apiKey.key, this.apiKey.value)
        }))
    }

}