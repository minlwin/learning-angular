import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'printing-pdf';

  pdfMake: any

  async load() {
    if (!this.pdfMake) {
      const pdf: any = await import('pdfmake/build/pdfmake')
      const vfs = await import('pdfmake/build/vfs_fonts')
      this.pdfMake = pdf.default
      this.pdfMake.vsf = vfs.pdfMake.vfs
    }
  }

  async simple() {

    await this.load()

    let doc = {
      header: 'Hello PDF',
      content: 'This is Content of PDF'
    }

    this.pdfMake.createPdf(doc).open()
  }

  list() {

  }

  table() {

  }
}
