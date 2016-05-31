# elpdfview

view pdf in electron user pdf.js. 

npm install elpdfview

# Usage

Used with pdf.js in render process in electron.

```javascript
var pdfurl ='https://www.canon.com.cn/products/printer/pixma-fax/images/speedtest.pdf';
var pdfview = require('elpdfview');
pdfview.showpdf(pdfurl);
```