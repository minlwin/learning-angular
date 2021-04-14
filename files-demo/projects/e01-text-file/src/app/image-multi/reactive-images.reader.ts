import { Injectable } from "@angular/core";
import { forkJoin, Observable, of } from "rxjs";
import { ReactiveImageReader } from "../image-simple/reactive-image.reader";

@Injectable()
export class ReactiveImagesReader {
    constructor(private reader: ReactiveImageReader) { }

    read(files: FileList): Observable<readonly string[]> {
        if (files.length) {
            return forkJoin(Array.from(files).map(a => this.reader.read(a)))
        }
        return of([])
    }
}