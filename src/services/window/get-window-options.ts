import { BrowserWindowConstructorOptions } from "electron";

export function getWindowOptions(): BrowserWindowConstructorOptions {
  return {
    fullscreen: true,
  }
}