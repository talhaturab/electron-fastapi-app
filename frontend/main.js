const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

let mainWindow;
let pythonServer;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('frontend/index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
    if (pythonServer) pythonServer.kill();
  });
}

app.whenReady().then(() => {
  // Start FastAPI backend
  pythonServer = spawn(path.join(__dirname, '../backend/dist/main'), [], {
    cwd: __dirname,
    shell: true
  });

  pythonServer.stdout.on('data', data => console.log(`PYTHON: ${data}`));
  pythonServer.stderr.on('data', data => console.error(`PYTHON ERR: ${data}`));

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
