import { Observable, of } from "rxjs";

export class ReactiveTextReader {

    read(file?: File): Observable<string> {

        if (file) {
            return new Observable<string>(subcriber => {
                const reader = new FileReader
                reader.onloadend = () => subcriber.complete()
                reader.onload = () => subcriber.next(reader.result?.toString() || '')
                reader.readAsText(file)
            })
        }

        return of()
    }
}