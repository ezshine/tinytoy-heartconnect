const {
	screen,
	app,
	BrowserWindow
} = require('electron')

app.on('ready', function(){
	const {
		swidth,
		sheight
	} = screen.getPrimaryDisplay().workAreaSize

	const size = 200;

	var mainWindow = new BrowserWindow({
		x:swidth-size,
    	y:sheight-size,
		width: size,
		height: size,
		frame: false,
		transparent: true,
		focusable: false,
		resizable:false,
		hasShadow: true,
		skipTaskbar: true,
		show:true,
		alwaysOnTop: true,
	});
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