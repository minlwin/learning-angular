import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReactiveTextReader } from './reactive-text.reader';
declare var $: any

@Component({
  templateUrl: './text-reactive.component.html',
  providers: [
    ReactiveTextReader
  ]
})
export class TextReactiveComponent implements OnDestroy {

  list: any[][] = []
  sub: Subscription | undefined

  constructor(private reader: ReactiveTextReader) { }

  openFile() {
    $('#fileInput').click()
  }

  readFile(event: any) {
    this.sub = this.reader.read(event.target.files[0]).pipe(
      map(line => line.split('\n')),
      map(array => array.map(a => a.split('\t')))
    ).subscribe(result => this.list = result)
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }
}
