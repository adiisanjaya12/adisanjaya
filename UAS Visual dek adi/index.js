const electron = require("electron");
const {app, BrowserWindow, MEnu, ipcMain} = electron;

let todayWindow;
let createWindow;
let listWindow;

app.on("ready", ()=>{
    todayWindow = new BrowserWindow({
         webPreferences: {
             nodeIntegration: true
         },
         title: "Program Menghitung Luas Bangun"
    });

    todayWindow.loadURL(`file://${__dirname}/rumah.html`);
    todayWindow.on("closed", ()=>{
        app.quit();
        todayWindow = null;
    });
});





