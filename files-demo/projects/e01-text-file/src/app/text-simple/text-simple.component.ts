import { Component } from '@angular/core';

declare var $: any

@Component({
  templateUrl: './text-simple.component.html',
  styles: [
  ]
})
export class TextSimpleComponent {

  list: any[][] = []

  openFile() {
    $('#fileInput').click()
  }

  readFile(event: any) {
    const files: FileList = event.target.files
    if (files[0]) {
      const file: File = files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.list = reader.result?.toString().split("\n").map(a => a.split('\t')) || []
      }
      reader.readAsText(file)
    }
  }
}
