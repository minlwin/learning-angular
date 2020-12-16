# Printing PDF in Angular 11

## Create Projct
အရင်ဆုံး Angular Cli နဲဲ့ Angular Project ကို တည်ဆောက်ပါမယ်။

```
ng new -S true -s true printing-pdf
```

Project Create ပြီးတဲ့ နောက်မှာ Project Folder ထဲကို ဝင်ပြီး၊ လိုအပ်မည့် Dependency တွေကို Install လုပ်ပါမယ်။
```
cd printing-pdf
npm i --save jquery popper.js bootstrap
```
ဒါကတော့ Bootstrap CSS Library ကိုအသုံးပြုဖို့လိုအပ်တဲ့ Dependency ပါ။

```
npm i --save pdfmake @types/pdfmake
```

pdfmake ကတော့ PDF Make Javascript Library ဖြစ်ပါတယ်။ 
Angular 11 ကို အသုံးပြုတဲ့ အခါမှာ JS File တွေကို import လုပ်တဲ့ အခါမှာ Error တက်တာကိုတွေ့ရပါတယ်။ 
အဲ့ဒီအတွက် @types/pdfmaker ကိုပါ Dependency အနေနဲ့ ထည့်သွင်းဖို့ လိုအပ်လာခဲ့ပါတယ်။

## Adding CSS and JS to Project

```
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/popper.js/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "node_modules/pdfmake/build/pdfmake.min.js",
    "node_modules/pdfmake/build/vfs_fonts.js"
]
```

Angular Project ရဲ့ Setting File ဖြစ်တဲ့ angular.json File ထဲမှာ အထက်ပါအတိုင်း အသုံးပြုမည့် Script File တွေနဲ့ CSS File တွေကို ဖြည့်စွက်ပေးထားရပါမယ်။

## Memo

သတိထားဖို့လိိုအပ်တာက @types/pdfmake ကို အသုံးပြုရင် ရေးထားတဲ့ Typescript File တွေထဲမှာ Typescript Class အနေနဲ့ import လုပ်လို့ရအောင် PdfMake ထဲက Class တွေကို Generate လုပ်ပေးထားပါတယ်။ 

ဒါပေမဲ့ Implementation Class တွေကတော့ JS File တွေထဲဲမှာပဲ ရှိပါတယ်။ ဒါ့ကြောင့် pdfmake ထဲက လိုအပ်တဲ့ js file တွေကို Angular Setting ထဲကနေရောက်နေအောင် ဖြည့်စွက်ထားပေးဖိို့ လိုအပ်ရတာဖြစ်ပါတယ်။