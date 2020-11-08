import { app } from 'electron';
import * as appServices from './services/app';
import * as windowServices from './services/window';

app.on('ready', windowServices.createWindow);
app.on('activate', windowServices.activateWindow);
app.on('window-all-closed', appServices.quitApp);