const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('appInfo', {
    version: require('./package.json').version
});
// 前端可通过 window.appInfo.version 读取版本号
