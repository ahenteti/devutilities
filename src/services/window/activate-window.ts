import { BrowserWindow } from "electron";
import { createWindow } from "./create-window";

export function activateWindow(): void {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}