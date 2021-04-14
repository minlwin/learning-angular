import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' })
export class MemberIdGenerator {
    private id: number = 0
    next() {
        return ++this.id
    }
}