const electron = require("electron");
const {app, BrowserWindow, Menu, ipcMain} = electron ;

let todayWindow;
let kubusWindow;
let prismaWindow;
let tabungWindow;
let kerucutWindow;
let ljajargenjang;
let klljajargenjang;

let allAppointment = []; 

app.on("ready", ()=> {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title : "Aplikasi Hitung Luas Bangun"
    });

    todayWindow. loadURL(`file://${__dirname}/today.html`);
    todayWindow.on("closed", () => {

        app.quit();
        todayWindow = null;
    });
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const kubusWindowCreator = () => {
    listWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Kubus"
    });

    listWindow.setMenu(null);
    listWindow.loadURL(`file://${__dirname}/kubus.html`);
    listWindow.on("closed" , () => (listWindow = null));
};

const ljajargenjangWindowCreator = () => {
    createWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Hitung jajar genjang"
    });

    createWindow.setMenu(null);
    createWindow.loadURL(`file://${__dirname}/ljajargenjang.html`);
    createWindow.on("closed" , () => (createWindow = null));
};

const klljajargenjangWindowCreator = () => {
    createWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Hitung jajar genjang"
    });

    createWindow.setMenu(null);
    createWindow.loadURL(`file://${__dirname}/klljajargenjang.html`);
    createWindow.on("closed" , () => (createWindow = null));
};

const prismaWindowCreator = () => {
    aboutWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Prisma Segitiga"
    });

    aboutWindow.setMenu(null);
    aboutWindow.loadURL(`file://${__dirname}/prismasegitiga.html`);
    aboutWindow.on("closed" , () => (aboutWindow = null));
};

const tabungWindowCreator = () => {
    tabungWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "luas tabung"
    });

    tabungWindow.setMenu(null);
    tabungWindow.loadURL(`file://${__dirname}/tabung.html`);
    tabungWindow.on("closed" , () => (tabungWindow = null));
};

const kerucutWindowCreator = () => {
    kerucutWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Kerucut"
    });

    kerucutWindow.setMenu(null);
    kerucutWindow.loadURL(`file://${__dirname}/kerucut.html`);
    kerucutWindow.on("closed" , () => (kerucutWindow = null));
};

const menuTemplate = [
    {
    label: "Jajar Genjang",
    submenu: [{
        label: "Luas",

            click() {
                ljajargenjangWindowCreator();
            }
        },
        {
            label: "Keliling",
    
            click() {
                klljajargenjangWindowCreator();
                
            }
        }
    ]
    
},
{

    label: "Luas Kubus" ,
    click() {
        kubusWindowCreator();
    }
},

{
    label : "Prisma Segitiga" ,
    click() {
        prismaWindowCreator();
    }

},


{
    label : "Luas Tabung" ,
    click() {
        tabungWindowCreator();
    }

},

{
    label : "Luas kerucut" ,
    click() {
        kerucutWindowCreator();
    }

}


]