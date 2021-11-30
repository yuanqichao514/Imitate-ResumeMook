module.exports = {
    presets: [
        '@babel/preset-env', // 根据配置目标的浏览器或者运行环境，选择对应的语法包，从而将代码替换
        '@babel/preset-react', // react语法包，让我们可以使用React ES6 Class Component的写法，支持JSX， TSX
        '@babel/preset-typescript', // https://github.com/babel/babel/issues/10570
    ],
    plugins: [
        '@babel/plugin-transform-runtime', // 官方提供的插件，用于减少冗余的代码
        [
            '@babel/plugin-transform-modules-commonjs', // 将ECMAScript转换成CommonJS
            {
                allowTopLevelThis: true, // 若不置为true， 可能会导致this变为undefined
                loose: true,
                lazy: true
            }
        ]
    ]
}