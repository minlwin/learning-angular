import { Injectable } from '@angular/core';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as vfs from 'pdfmake/build/vfs_fonts';
import { PdfMaker } from './pdfmaker';

@Injectable({
  providedIn: 'root'
})
export class PdfmakeService {

  private maker: PdfMaker
  private fonts = {
    Padauk: {
      normal: 'Padauk-Regular.ttf',
      bold: 'Padauk-Bold.ttf'
    },
    Pyidaungsu: {
      normal: 'Pyidaungsu-Regular.ttf',
      bold: 'Pyidaungsu-Bold.ttf'
    }
  }

  constructor() {
    this.maker = pdfmake
    this.maker.vfs = vfs.pdfMake.vfs
  }

  create(document: any) {
    return this.maker.createPdf(document, {}, this.fonts)
  }
}
