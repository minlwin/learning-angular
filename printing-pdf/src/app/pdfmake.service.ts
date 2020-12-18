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
    Padauk: {
      normal: 'Padauk-Regular.ttf',
      bold: 'Padauk-Bold.ttf'
    },
    Pyidaungsu: {
      normal: 'Pyidaungsu-Regular.ttf',
      bold: 'Pyidaungsu-Bold.ttf'
    },
    NamKhoneUnicode: {
      normal: 'NamKhoneUnicode.ttf',
      bold: 'NamKhoneUnicode.ttf'
    },
    Roboto: {
      normal: 'Roboto-Regular.ttf'
    }
  }

  private styles = {
    h1: {
      fontSize: 22,
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
