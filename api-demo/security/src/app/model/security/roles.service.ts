import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiClient } from "../client/api-client";
import { Role, User } from "./model";

@Injectable({ providedIn: 'root' })
export class RoleService {

    private client: ApiClient

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, 'roles')
    }

    getAllRoles(): Observable<Role[]> {
        return this.client.get().pipe(
            map(data => data.results)
        )
    }

    getSignUpRole() {
        return this.getAllRoles().pipe(
            map(a => a.filter(role => role.signUp).pop())
        )
    }

    addUser(role: Role | undefined, user: User) {
        return this.client.put(role?.objectId!, {
            "users": {
                "__op": "AddRelation",
                "objects": [
                    {
                        "__type": "Pointer",
                        "className": "_User",
                        "objectId": user.objectId
                    }
                ]
            }
        })
    }

    getUserRole(user: User) {

    }
}