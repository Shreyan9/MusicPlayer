const { BrowserWindow, app } = require("electron")
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width:925,
        height:725,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }

    });
    win.loadFile('index.html');
}

app.whenReady().then( () => {   
    createWindow();
});

app.on('window-all-closed', () => {
    app.quit();
});