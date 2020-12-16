import { TCreatedPdf } from "pdfmake/build/pdfmake";
import { CustomTableLayout, TDocumentDefinitions, TFontDictionary } from "pdfmake/interfaces";

export interface PdfMaker {
    vfs: any

    fonts: any

    createPdf(
        documentDefinitions: TDocumentDefinitions,
        tableLayouts?: { [name: string]: CustomTableLayout },
        fonts?: TFontDictionary,
        vfs?: { [file: string]: string },
    ): TCreatedPdf
}