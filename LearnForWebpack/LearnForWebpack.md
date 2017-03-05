# Learn Tools

## 1. LearnForWebpack

webpack -- 一种强大的打包工具，但是官方文档极其混乱，一方面希望它早点淘汰，又一方面怕它过早的淘汰。好纠结

主要参考的有：

- 慕课webpack课程

### 1.1 Webpack 简单入门

以实际使用的方式来接触 webpack；
建立一个简单的目录

- project
  - js/
    - index.js
    - bundle.js
  - css/
    - style.css
  - index.html

注：如果向github 上提交代码，而跳过模块文件，需要配置 .gitignore 文件，在文件中输入


#### 1.1.1 打包 js 文件

 1. 建立一个项目
 `npm init`

 2. 安装本地的webpack
 `npm install webpack --save-dev`

 3. webpack 编译
    - 通过 webpack 命令进行打包
    `webpack .\js\index.js .\js\bundle.js`
    - index.js 相当于入口文件
    - bundle.js 相当于输出文件

#### 1.1.2 打包 css 文件

 1. 使用 webpack 不能直接打包 .css 类型的文件，需要补充模块来进行支持，常用的有：
    - css-loader -- 将 css 文件打包 js 文件
    - style-loader -- 将 style 标签插入到 html 中
 2. 安装模块
    - `npm install css-loader style-loader --save-dev`
 3. 可以在入口文件 index.js 文件引入 style.css 的时候，添加编译条件
    - `import css from "style-loader!css-loader!../css/style.css"`
    注：这里的编译顺序是从右向左的，先要经过 css-loader 再通过 style-loader
 4. 同样可以使用 CLI 命令，来完成打包
    - `webpack .\js\index.js .\js\bundle.js --module-bind "css=style-loader!css-loader"`

### 1.2 webpack 常用参数

 1. --watch 实时监控，如果对文件进行了修改就重新打包
 2. --progress 查看打包进程
 3. --display-modules || --labeled-modules 显示打包的模块
 4. --display-reasons || --verbose 显示打包的细节
 5. --config[path] 配置文件，默认为根目录下 webpack.config.js 文件

### 1.3 通过 webpack.config.js 打包文件

以实际使用的方式来接触 webpack；
建立一个简单的目录

- project2
  - dist -- 存放处理后的文件
  - src -- 存放处理前的文件
    - js/
      - index.js
    - css/
      - style.css
    - app.js -- 入口文件
  - index.html

#### 1.3.1 创建一个项目(准备工作)

`npm init`
`npm install webpack style-loader css-loader --save-dev`

#### 1.3.2 配置webpack.config.js

  在命令行中使用 webpack 命令，可以通过配置文件进行打包，其中默认执行的是 webpack.config.js 文件 如果需要使用其它的配置文件可以通过 webpack --config [name]使用

#### 基本配置

   ```js
    module.exports = {
        context:'',
        entry: './src/app.js',
        output: {
            path: './dist/js',
            filename: 'bundle.js'
        }
    }
   ```

- context -- 文件的上下文环境，默认指向根文件；
- entry 字段 规定了入口文件
  入口文件可以使用三种类型：
  1. string -- 单文件 -- 直接存放路径
  2. Array -- 多文件 -- 使用数组存放多个文件
  3. 对象 -- {key:value} -- key 是指这一项的 chunk name；value表示真实的入口文件

- output 字段 输出文件
  - path -- 输出文件的存放路径
  - filename -- 输出文件的文件名
  - publicPath -- 占位符，当需要上线的时候，这里将引用变成线上地址
  如果输入文件是一个对象并包含多个key，就需要在filename中进行修改，如果只有一个bundle.js 那么后面的会覆盖掉前面的；这时可以通过占位符来进行多个文件的输出：[name],[hash],[chunk-hash]
  >注：hash -- 相当于版本号，chunk-hash 只会在文件修改的时候，才会修改的hash

  实例：

   ```js
        module.exports = {
            entry: {
                main: './src/js/index.js',
                main2: './src/js/index2.js'
            },
            output: {
                path: './dist/js',
                filename: '[name]bundle.js',
                publicPath: 'http://cdn.com/'
            }
        }
   ```

  通过这种方式可以输出两个文件 mainbundle.js 和 main2bundle.js,并且引入的路径格式是线上绝对路径：`http://cdn.com/dist/js/...`

  注：
  1. 如果不想每次都要在命令行中运行webpack打包命令，可以通过在npm的配置文件中的Script里，输入运行指令然后直接调用
  2. publicPath 是为了引入绝对路径，输入的线上地址

  例如：
  ``` json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "webpack": "webpack --watch"
    },
  ```
  可以通过`npm run webpack`执行命令

#### plugin

  如果使用了hash作为文件名，那么输出的文件如何引入就成为了问题，这时可用使用 `html-webpack-plugin`来实现；这个模块引入了模板，通过对模板的编辑来决定输出；

  1. 安装 `html-webpack-plugin`
  `npm install html-webpack-plugin --save-dev`

  2. 在 webpack.config.js 中引入 html-webpack-plugin 文件（这个必须使用 commonjs 语法）
  `var htmlWebpackPlugin = require("html-webpack-plugin")`

  3. 配置 webpack.config.js -- plugins 字段

  ```js
  plugins: [
    new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: 'head'
    })
  ]
  ```
  注：
    - new htmlWebpackPlugin() 如果不传入参数就会生成一个index.html 文件，并且将所有的js 文件关联到这个文件上；
    - template -- 模板文件，以context指示的路径为根路径
    - filename -- 输出的文件名
    - inject -- 将打包的js文件输出到什么位置

#### 1.3.3 htmlWebpackPlugin 详解

#### htmlWebpackPlugin 属性

  可以通过plugins的配置，对模板文件进行传参，使用的模板格式：`<% %>`
  我们可以通过在模板中使用
   ```jsp
        <% for (var key in htmlWebpackPlugin) { %>
            <%= key %>
        <% } %>
   ```
  的语法将 htmlWebpackPlugin 中能遍历的属性显示出来；其中key包括：files(打包文件的相关信息) 和 options(传入的自定义属性) 继续遍历：
   ```jsp
    <p>
        <% for (var key in htmlWebpackPlugin.files) { %>
            <%= key %>: <%= htmlWebpackPlugin.files[key]%>
        <% } %>
    </p>
    <p>
        <% for (var key in htmlWebpackPlugin.options) { %>
            <%= key %>:  <%= htmlWebpackPlugin.options[key]%>
        <% } %>
    </p>
   ```
  得到：
   ```json
        publicPath: ""
        chunks:{
            "bundle2":{
                "size":49,
                "entry":"/js/bundle2bundle.js",
                "hash":"29d6d9e58bc3a8780d88",
                "css":[]
                },
            "bundle":{
                "size":45,
                "entry":"/js/bundlebundle.js",
                "hash":"a9442c1b47c167c76685",
                "css":[]
                }
            }
        js:["/js/bundle2bundle.js","/js/bundlebundle.js"]
        css:[]
        manifest:
   ```
   ```json
        template:D:\soft\wamp\www\GitHub\LearnES6\Module\project2\node_modules\.2.28.0@html-webpack-plugin\lib\loader.js!D:\soft\wamp\www\GitHub\LearnES6\Module\project2\index.html
        filename:index.html
        hash:false
        inject:true
        compile:true
        favicon:false
        minify:false
        cache:true
        showErrors:true
        chunks:all
        excludeChunks:this is a webpack project
        xhtml:false
   ```
  可以使用这些参数进行配置；
  例如：
  实际使用：手动添加js文件，注：首先要将 htmlWebpackPlugin 配置项中的 inject 值 改成false，阻止默认插入的行为
   ```html
        <script src="<%= htmlWebpackPlugin.files.chunks.bundle.entry %>"></script>
   ```
   可以通过 npm 官网 查询 插件的详细解释

#### htmlWebpackPlugin 可以实现上线压缩

  在 htmlWebpackPlugin 中提供了压缩的功能
  通过在配置中添加 minify 进行配置：
  常用参数：查看 [npm-htmlWebpackPlugin](http://https://github.com/kangax/html-minifier#options-quick-reference)
  例如：
   ```js
    minify {
        removeComments: true, // -- 是否移出注释
        collapseWhitespace: true // -- 是否合并空格
    }
   ```

#### htmlWebpackPlugin 多个文件引用

  如果一个项目中需要同时生成多个文件，可以重复调用 `new htmlWebpackPlugin()`,每一次调用都会生成一次文件,这样就会引入相同的chunk；

  但是如果需要使用各自的chunk，可以在各自的配置项中添加chunks(包含的文件)参数或者excludeChunks(排除的文件)

#### htmlWebpackPlugin 内联文件内容

  如果需要将js文件打包到index.html 文件中可以使用：
  通过模板的方式将文件的内容内联到文件中去；
  使用下面的代码可以提取文件内容
   ```html
    <script>
    <%= compilation.assets[htmlWebpackPlugin.files.chunks.bundle.entry.substr(htmlWebpackPlugin.files.publicPath.length)].source() %>
    </script>
   ```
  注：
   1. 使用 htmlWebpackPlugin.files.chunks.bundle.entry 为添加chunk的入口文件，使用substr是为了截取掉publicPath部分
   2. 这里的chunks是文件引入的chunk，而不是指所有的chunk
   3. compilation.assets -- 将文件接入 通过 source 方法将内容提取出来
  这个时候已经内联的文件，就不需要通过script标签引用了，可以通过通过下面的方法进行筛选
   ```jsp
        <% for (var item in htmlWebpackPlugin.files.chunks) { %>
                <% if (item !== 'bundle') { %>
                    <%= item %>
                        <script src="<%= htmlWebpackPlugin.files.chunks[item].entry %>"></script>
                        <% } %>
        <% } %>
   ```

### 1.4 webpack -- loader 的使用

  webpack 中的loader 就相当于预先在文件中定义了一些执行命令，当遇到某些文件的时候，对其进行相应的一个操作
  使用 project3 来演示

#### 1.4.1 搭建项目目录

- dist/ -- 打包后文件的存放目录
- src/ -- 打包前的文件存放目录
  - components/ -- 存放项目模块
  - css/ -- 存放项目的css文件
  - app.js -- 打包的接口
- index.js -- 打包时使用的模板

#### 1.4.2 建立项目

- npm init
- npm install webpack --save-dev
- npm install html-webpack-plugin

#### 1.4.3  配置 webpack.config.js 文件

    ```js
        var htmlWebpackPlugin = require('html-webpack-plugin');
        var path = require('path');

        module.exports = {
            entry: './src/app.js',
            output: {
                path: './dist',
                filename: './js/bundle.js'
            },
            plugins: [
                new htmlWebpackPlugin({
                    filename: 'index.html',
                    template: 'index.html',
                    inject: 'body'
                })
            ]
        }
    ```
- 注：这里引入了 path 模块，用于获取文件的绝对路径，使用方式：`path.resolve(__dirname, [path])` 这里的path是指相对路径

#### 1.4.4  配置模块

[webpack 文档 -- configration](http://webpack.github.io/docs/configuration.html)

- 打包 ES6 文件 -- loader 模块

    [babel-setup](http://babeljs.cn/docs/setup/)

    1. `npm install --save-dev babel-loader` -- 关键模块
    2. `npm install --save-dev babel-cli babel-preset-es2015` -- 模块依赖的插件
    具体插件信息可以查看：
    [babel插件](http://babeljs.io/docs/plugins/#presets) 查看详情
    [babel插件](http://babeljs.cn/docs/plugins/) 查看详情
    3. 在使用的时候需要配置参数,有两种方式配置
    第一种在 webpack.config.js 中添加配置

     ```js
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }]
        },

        test -- 要编译的文件类型
        exclude -- 不包括的
        loader -- 执行的编译方式
     ```

    第二种使用配置文件 -- .babelic
    在根目录下创建一个 .babelrc 文件，在文件中添加：

     ```js
        {
        "presets": ["es2015"]
        }
     ```

- 打包 css 文件

  打包css文件 使用到两个模块

  - css-loader
  - style-loader

  1. 首先安装
    `npm install css-loader style-loader --save-dev`
  2. 在入口文件中引入 css 文件
    `import '...css'`
  3. 配置 webpack.config.js 文件

     ```js
         module: {
             ...
              {
                 test: /\.css$/,
                 exclude: path.resolve(__dirname, "node_modules"),
                 loaders: ['style-loader', 'css-loader']
             }]
         },
     ```

     或者是通过

     ```js
         module: {
             ...
              {
                 test: /\.css$/,
                 exclude: path.resolve(__dirname, "node_modules"),
                 use: ['style-loader', 'css-loader']
             }]
         },
     ```
  4. 如果插入的css文件中通过 @import 又引入了别的css文件那么还需要向 css-loader 添加参数 
  (试了很多方法只有下面这一种能够正常运行)

     ```js
        module.exports = {
            entry: './src/app.js',
            output: {
                path: './dist',
                filename: './js/bundle.js'
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: path.resolve(__dirname, "node_modules"),
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }, {
                    test: /\.css$/,
                    exclude: path.resolve(__dirname, "node_modules"),
                    loaders: [
                        'style-loader',
                        'css-loader?importLoaders=1&souceMap=true',
                        'postcss-loader'
                    ]
                }]
            },
            plugins: [
                new webpack.LoaderOptionsPlugin({
                    options: {
                        postcss: [
                            require('autoprefixer')({
                                broswers: ['last 2 version'] // autoprefixer的参数
                            })
                        ]
                    }
                }),
                new htmlWebpackPlugin({
                    filename: 'index.html',
                    template: 'index.html',
                    inject: 'body'
                })
            ]
        }
     ```
  5. 运行 webpack 打包

- 使用 css 后处理 -- postcss-loader
  css 后处理，为 css 样式添加前缀等使用 postcss-loader
  1. 安装 postcss-loader
  2. 安装相关插件
  postcss-loader 的功能十分强大，使用的过程中需要根据要实现的功能对其添加相关的插件，例如：'autoprefixer'
  `npm install autoprefixer --save-dev`
  3. 配置webpack.config.js
  在 webpack.config.js 配置postcss-loader 文件，由于postcss-loader 是处理css文件的，可以将其与style-loader写在一个  loader中，主要的部分是向 postcss-loader 添加插件，也就是传递参数；有很多种方式都可以完成 
  第一种

     ```js
        module: {
                rules: [
                    ...
                    , {
                    test: /\.css$/,
                    exclude: path.resolve(__dirname, "node_modules"),
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [
                                        require('autoprefixer')({
                                            broswers: ['last 5 version']
                                        })
                                    ]
                                }
                            }
                        }
                    ]
                }]
            },
     ```
  第二种

     ```js
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        require('autoprefixer')({
                            broswers: ['last 2 version'] // autoprefixer的参数
                        })
                    ]
                }
            }),
            new htmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html',
                inject: 'body'
            })
        ]
     ```

- 配置预处理器处理
  目前常用的预处理器包括： less，sass，stylus
  以sass 为例：
  1. 安装sass-loader
  `npm install sass-loader --save-dev` 
  注： 这里如果没有sass会有提示安装  node-sass

  2. 配置webpack.config.js

     ```js
       {
           test: /\.scss$/,
           exclude: path.resolve(__dirname, "node_modules"),
           loaders: [
               'style-loader',
               'css-loader',
               'postcss-loader',
               'sass-loader'
           ]
       }
     ```
  3. 在入口文件- app.js 中引入 scss 文件
  4. 运行webpack
  注： 在less中处理 @import 的问题，无需额外的操作

- html 模板加载
  模块化开发，就需要在文件中引入相应的模块文件；并且找到对应的解析方法；
  可以通过webpack官网查看其对应的loader
  [template](http://webpack.github.io/docs/list-of-loaders.html);

  以html模板为例：

  1. 首先安装html-loader
  `cnpm install html-loader --save-dev`

  2. 然后配置其 loader

     ```js
        test: /\.html$/,
        exclude: path.resolve(__dirname,   'node_modules'),
        loader: 'html-loader'
     ```

- img -- loader 的问题(必须经过模板处理后文件才能使用)
    在项目中如果需要引入图片或者文件会存在路径问题，需要额外的工具 -- file-loader

    1. 安装
    `cnpm install file-loader --save-dev`

    2. 配置 webpack.config.js

     ```js
            {
                test: /\.(jpg|png|gif|sev)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'file-loader'
            }
     ```
     这种方式可以解决在根文件下引入的图片问题，以及在样式中引入的图片问题，并能匹配相对路径的绝对路径，但是在模板中相对路径就会存在路径问题；
     如果希望打包后的文件具有相应的路径，可以在loader中传入相应的参数

     ```js
        {
            test: /\.(jpg|png|gif|sev)$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'file-loader',
            options: {
                name: 'assets/[name]-[hash:5].[ext]'
            }
        }
     ```
- 解决模块中文件的路径问题 -- url-loader
    当你的文件或者图片，大于限制的大小的时候就会交给 file-loader，否则转换成为 base64 位的编码

    1. 安装 url-loader
    `cnpm install url-loader --save-dev`
    2. 配置webpack.config.js 

     ```js
        {
            test: /\.(jpg|png|gif|sev)$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            loaders: [
                'url-loader?limit=500&name=assets/img-[hash:5].[ext]'
            ]
        }
     ```
    - 常用参数：limit 表示限制条件；name 表示路径
    当你的文件或者图片，大于限制的大小的时候就会交给 file-loader，否则转换成为 base64 位的编码
    注：使用图片会有缓存，而使用base64 每一使用都是新的

- 压缩图片相关 -- image-webpack-loader

    1. 安装 image-webpack-loader
    `cnpm install image-webpack-loader --save-dev`
    2. 配置webpack.config.js 

     ```js
        {
        test: /\.(jpg|png|gif|sev)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
            loaders: [
                'url-loader?limit=500&name=assets/img-[hash:5].[ext]',
                'image-webpack-loader'
            ]
        }
     ```
    image-webpack-loader -- 是个功能很强的包，具有很多参数，对不同类型有不同的优化方法；