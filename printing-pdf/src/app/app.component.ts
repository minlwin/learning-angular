import { Component } from '@angular/core';
import { PdfmakeService } from './pdfmake.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'printing-pdf';

  constructor(private pdfService: PdfmakeService) { }

  async simple() {

    let doc = {
      content: 'pdfmake library က PDF ကို Generate လုပ်တဲ့ အခါမှာ Virtual File System ထဲက Embedded Font တွေကို အသုံးပြုပါတယ်။ Default အတိုင်းဆိုရင် Roboto Font ကို အသုံးပြုပါတယ်။ Roboto ထဲမှာ မြန်မာစာလုံးတွေအတွက် Glaphyte တွေမပါပါဘူး။ အဲ့ဒီတော့ Default အတိုင်းဆိုရင် မြန်မာစာက ပေါ်မလာပဲ လေးထောင့်တုံးလေးတွေဖြစ်နေတယ်။',
      defaultStyle: {
        font: 'Pyidaungsu'
      }
    }

    this.pdfService.create(doc).open()
  }

  list() {

  }

  table() {

  }
}
