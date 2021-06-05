import { Injectable } from "@angular/core";
import { LoginUser } from "./model";

@Injectable({ providedIn: 'root' })
export class SecurityContext {

    private loginUser?: LoginUser

    login(user: LoginUser) {
        this.loginUser = user
    }

    get sessionToken() {
        return this.loginUser?.sessionToken
    }
}

