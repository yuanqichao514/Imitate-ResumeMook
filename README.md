# Imitate-ResumeMook
It's a electron + react +ts project learning project


## prepare

  · node 
  
  · npm
  
  · webpack
  
    1. webpack.base.js 用来添加公共配置
    
    2. webpack.main.dev.js 用来写主进程的配置
    
    3. webpack.render.dev.js 用来写渲染进程的配置
    
    2/3 两个配置中都要引入公共配置，最后通过webpackMerge的merge方法合并配置
    
  · babel
  
    1.preset 
    
      preset-env
      
      preset-react
      
      preset-typescript
      
    2.plugins
      plugin-transform-modules-commonjs // 提供的插件，用于减少用于的代码

      plugin-transform-modules-commonjs // 转换成CommonJS
      
      babel-plugin-react-css-modules
      
  · 这里要注意一点的是，如果你需要在electron中能够看到和google浏览器一样的开发者工具，你需要额外下载下面两个依赖，
    并在主进程的eletron.ts文件中，通过
    ```ainWindow.webContents.openDevTools({mode:'right'});``` 来打开
    
      "electron-debug": "^3.2.0",
      
      "electron-devtools-installer": "^3.2.0",
