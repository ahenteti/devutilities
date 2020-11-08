import { BrowserWindow } from 'electron';
import { getWindowOptions } from './get-window-options';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

export function createWindow(): void {
  const mainWindow = new BrowserWindow(getWindowOptions());
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
}