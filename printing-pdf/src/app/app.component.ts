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
      content: [
        this.pdfService.h1('Using Myanmar Unicode in PdfMake'),
        this.pdfService.p('pdfmake library က PDF ကို Generate လုပ်တဲ့ အခါမှာ Virtual File System ထဲက Embedded Font တွေကို အသုံးပြုပါတယ်။ Default အတိုင်းဆိုရင် Roboto Font ကို အသုံးပြုပါတယ်။ Roboto ထဲမှာ မြန်မာစာလုံးတွေအတွက် Glaphyte တွေမပါပါဘူး။ အဲ့ဒီတော့ Default အတိုင်းဆိုရင် မြန်မာစာက ပေါ်မလာပဲ လေးထောင့်တုံးလေးတွေဖြစ်နေတယ်။'),
        this.pdfService.p('အဲ့ဒီတော့ လုပ်ရမှာက မြန်မာဖောင့်ကို Virtual File System ထဲကို ရောက်အောင် ထည့်ပြီး Document ထဲမှာ အဲ့ဒီ ဖောင့်ကို သုံးမယ်ဆိုပြီး သတ်မှတ်ပေးရုံပါပဲ။'),

        this.pdfService.h1('How to do this!'),
        this.pdfService.p('VSF အတွက် vsf_fonts.js ဆိုတဲ့ File ထဲမှာ သတ်မှတ်ထားရပါတယ်။ pdfmake မှာတော့ Customer Font တွေကို VSF ထဲကို ထည့်ဖို့ နည်းလမ်း ၃ မျိုးပြင်ပေးထားပါတယ်။'),
        {
          ol: [
            'gulf နဲ့ Build လုပ်တဲ့ နည်း',
            'Shell Script နဲ့ vsf_fonts.js File ကို Generate လုပ်တဲ့ နည်း',
            'php Script နဲ့ vsf_fonts.js File ကို Generate လုပ်တဲ့ နည်း'
          ]
        },

        this.pdfService.h1('That I choose'),
        this.pdfService.p('ကျွန်တော်ကတော့ Shell Script ကိုပဲ အသုံးပြုခဲ့ပါတယ်။'),
        this.pdfService.p('Official Site ထဲမှာ ပြထားတဲ့ Shell Script က Bash Shell အတွက်ဖြစ်နေပြီး ကျွန်တော့်စက်က zsh ဖြစ်နေတဲ့ အတွက် နဲနဲတော့ ပြင်ရေးလိုက်ရပါတယ်။'),
        this.pdfService.p('လုပ်နေတာက Font File Name ရဲ့ တန်ဖိုးနေရာကို Font File ထဲကစာတွေကို Base 64 နဲ့ Encode လုပ်ပြီး သတ်မှတ်ပေးလိုက်တာပါပဲ။ ပြီးတဲ့အခါ အသုံးပြုလိုတဲ့ Document ထဲမှာ မြန်မာစာပါလာရင် မြန်မာ ဖောင့်ကို သုံးမယ်လို့ သတ်မှတ်ပေးလိုက်ရုံပါပဲခင်ဗျာ။ ပိတောက်ကတော့ အဆင်မပြေပါဘူး။ ပြည်ထောင်စုကရတော့ရပါတယ်။ သိပ်မကြိုက်သေးတော့ အခြားဖောင့်တွေနဲ့ စမ်းကြည့်လိုက်ပါဦးမယ်ခင်ဗျာ။'),
        this.pdfService.p('ပြီးသွားရင် ဘယ်လိုလုပ်ရမယ်ဆိုတာကို Git Hub Repository ပေါ်တင်ပြီး ရှယ်ပေးလိုက်ပါမယ်ခင်ဗျာ။')
      ],
      defaultStyle: {
        font: this.pdfService.fonts.Pyidaungsu
      }
    }

    this.pdfService.create(doc).open()
  }

  list() {
    let doc = {
      content: [
        this.pdfService.h1('List ဆိုတာကို သုံးကြည့်ကြရအောင်လား'),
        this.pdfService.p(`VSF အတွက် vsf_fonts.js ဆိုတဲ့ File ထဲမှာ သတ်မှတ်ထားရပါတယ်။ pdfmake မှာတော့ Customer Font တွေကို VSF ထဲကို ထည့်ဖို့ နည်းလမ်း ၃ မျိုးပြင်ပေးထားပါတယ်။`),
        {
          ol: [
            'gulf နဲ့ Build လုပ်တဲ့ နည်း',
            'Shell Script နဲ့ vsf_fonts.js File ကို Generate လုပ်တဲ့ နည်း',
            'php Script နဲ့ vsf_fonts.js File ကို Generate လုပ်တဲ့ နည်း'
          ]
        }
      ],
      defaultStyle: {
        font: this.pdfService.fonts.Pyidaungsu
      }
    }
    this.pdfService.create(doc).open()
  }

  table() {

    let doc = {
      content: [
        this.pdfService.h1('Printing Tables'),
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              ['First', 'Second', 'Third', 'The last one'],
              ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
              [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4']
            ]
          }
        }
      ],
      defaultStyle: {
        font: this.pdfService.fonts.Pyidaungsu
      }
    };
    this.pdfService.create(doc).open()
  }
}
