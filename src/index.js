const {
	screen,
	app,
	BrowserWindow
} = require('electron')

app.on('ready', function(){
	var screensize = screen.getPrimaryDisplay().workAreaSize;

	const size = 200;

	var mainWindow = new BrowserWindow({
		x:screensize.width-size,
    	y:screensize.height-size,
		width: size,
		height: size,
		frame: false,
		transparent: true,
		focusable: true,
		resizable:false,
		hasShadow: false,
		show:true,
		alwaysOnTop: true,
		webPreferences:{
			nodeIntegration:true,
			contextIsolation:false
		}
	});
	// mainWindow.webContents.openDevTools({mode:'detach',activate:true})
	mainWindow.loadFile('index.html');
})
app.on('window-all-closed', function() {
	app.quit();
})

const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  //app.quit()
}
app.on('second-instance', (event, commandLine, workingDirectory) => {
    app.quit();
})