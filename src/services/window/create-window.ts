import { BrowserWindow } from 'electron';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

export function createWindow(): void {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  });
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
}