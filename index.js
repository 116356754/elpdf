
 const remote = require('electron').remote;
 const BrowserWindow = remote.BrowserWindow;
 
 module.exports={
    showpdf
};

function showpdf(pdfurl){
    "use strict";
    console.log(pdfurl);   

    var win = new BrowserWindow({ width: 800, height: 600 ,
        webPreferences: {
            nodeIntegration: false,
            webSecurity: false
        },
        title: 'PDF Viewer',
        autoHideMenuBar:true
    });

	var PDF_URL = 'file://' + path.join(__dirname, 'pdfjs', 'web', 'viewer.html?file=');
    win.loadURL(PDF_URL+pdfurl);

    win.on('closed', function() {
        win = null;
    });
	
	return win;
}