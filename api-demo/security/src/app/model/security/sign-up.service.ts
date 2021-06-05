import { Injectable } from "@angular/core";
import { map, switchMap } from "rxjs/operators";
import { LoginUser } from "./model";
import { RoleService } from "./roles.service";
import { UsersService } from "./users.service";

@Injectable({ providedIn: 'root' })
export class SignUpService {

    constructor(private users: UsersService, private roles: RoleService) {
    }

    signUp(form: any) {
        return this.users.createUser(form, true).pipe(
            map(resp => ({ sessionToken: resp.sessionToken } as LoginUser)),
            switchMap(loginUser => this.users.getLoginUser().pipe(
                map(user => {
                    loginUser.user = user
                    return loginUser
                })
            )),
            switchMap(loginUser => this.roles.getSignUpRole().pipe(
                switchMap(role => this.roles.addUser(role, loginUser.user!).pipe(
                    map(_ => {
                        loginUser.role = role
                        return loginUser
                    })
                ))
            ))
        )
    }
}