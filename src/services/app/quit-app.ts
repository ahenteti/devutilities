import { app } from 'electron';

export function quitApp(): void {
  if (process.platform !== 'darwin') {
    app.quit();
  }
}