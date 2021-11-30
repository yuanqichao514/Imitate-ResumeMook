/**
 * @desc electron 主入口
 */
const path = require('path')
const { app, BrowserWindow } = require('electron')

function isDev() {
    // webpack.DefinePlugin 定义的构建变量
    return process.env.NODE_ENV === 'development'
}

function createWindow() {
    //　创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true // 注入node模块
        }
    });

    mainWindow.webContents.openDevTools({mode:'right'});

    if(isDev()) {
        mainWindow.loadURL(`http://127.0.0.1:7001`)
    }else {
        mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
    }
}

app.whenReady().then(() => {
    // app就绪的时候创建一个窗口
    createWindow();
    // 监听activate事件，如果此时窗口数量为0的话，就创建窗口
    app.on('activate', function () {
        if( BrowserWindow.getAllWindows.length === 0 ) createWindow();
    })
})