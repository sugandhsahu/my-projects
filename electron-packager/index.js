const electron = require('electron');
const app = electron.app;
const browserWindow = electron.BrowserWindow;
var path = require('path')

let mainWindow;
app.on('ready', () => {
    mainWindow = new browserWindow(
        {
            width: 1024,
            height: 1024,
            icon: path.join(__dirname, '/fav.png')
        }
    )

    mainWindow.loadURL('https://iris.centilytics.com');
});