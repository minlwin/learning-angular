import { Observable, of } from "rxjs";

export class ReactiveImageReader {

    read(file: File): Observable<string> {

        if (file) {
            return new Observable(subscriber => {
                const reader = new FileReader
                reader.onloadend = () => subscriber.complete()
                reader.onerror = () => subscriber.error({ message: "Can not read image file" })
                reader.onload = () => subscriber.next(reader.result?.toString() || '')
                reader.readAsDataURL(file)
            })
        }

        return of()
    }
}