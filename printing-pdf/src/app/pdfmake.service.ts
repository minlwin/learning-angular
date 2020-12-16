import { Injectable } from '@angular/core';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as vfs from 'pdfmake/build/vfs_fonts';
import { PdfMaker } from './pdfmaker';

@Injectable({
  providedIn: 'root'
})
export class PdfmakeService {

  private maker: PdfMaker
  private fontsData = {
    MyanmarText: {
      normal: 'mmrtext.ttf',
      bold: 'mmrtextb.ttf'
    },
    Pyidaungsu: {
      normal: 'Pyidaungsu-Regular.ttf',
      bold: 'Pyidaungsu-Bold.ttf'
    }
  }

  fonts = {
    MyanmarText: "MyanmarText",
    Pyidaungsu: "Pyidaungsu"
  }

  private styles = {
    h1: {
      fontSize: 22,
      bold: true,
      lineHeight: 1.2
    }
  }

  constructor() {
    this.maker = pdfmake
    this.maker.vfs = vfs.pdfMake.vfs
  }

  create(document: any) {
    return this.maker.createPdf(document, {}, this.fontsData)
  }

  h1(text: string) {
    return { text: text, style: this.styles.h1 }
  }

  p(text: string) {
    return { text: text, margin: [0, 0, 0, 10] }
  }
}
