const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    frame: false
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})