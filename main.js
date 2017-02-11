'use strict'

// Electron loaded via NPM
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

// Used to keep application main window in JS context so not GC'd
var mainWindow = null;

// Mimic UX of Win/Linux so closing only app window closes app
app.on('window-all-closed', function(){
    if(process.platform !== 'darwin') app.quit();
});

app.on('ready', function(){
    mainWindow = new BrowserWindow();
    mainWindow.loadURL('file://' + process.cwd() + '/index.html');
    mainWindow.on('closed', function(){ mainWindow = null; });
});