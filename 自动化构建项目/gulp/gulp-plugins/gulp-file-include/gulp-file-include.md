# gulp-file-include 使用

## 简介

gulp-file-include 可以用来合并文件的插件（a plugin of gulp for file include）
使用这个插件的本意是为了将页面模块化，而模块化的第一步就是能够保证分离的结构之间能够相互组合使用，并能在这个基础上实现简单的逻辑操作；

### 基本使用

- 安装   
    `npm i gulp --save-dev`  
    `npm i gulp -g`  
    `npm i --save-dev gulp-file-include`
- 创建 `gulpfile.js`

        ```js
            const gulp = require('gulp'),
                fileinclude = require('gulp-file-include');
                
            gulp.task('default', function (){

                gulp.src('./index.html')
                    .pipe(fileinclude())
                    .pipe(gulp.dest('./dist'))
            });
        ```
    > 注：这个将会在 `./dist` 文件夹下面创建一个被处理后的插件 `index.html` 文件

- 相关参数 options
    1. options-type
        - 值：'string'  
            表示：just as prefix, default @@, and basepath is default @file  
            例如：`fileinclude('@@')`;

        - 值: {object}
            key-val :  
            - prefix: string, default @@
            - suffix: string, default ''
            - basepath: string, default @file, it could be @root, @file, your-basepath
            - filters: object, filters of include content -- 没有使用
            - context: object, context of if statement -- 全局变量可以在语法块中使用
            - indent: boolean, default false -- 不知道干什么用

    2. options.basepath - type: string
        it could be @root, include file relative to the dir where gulp running in
        @file, include file relative to the dir where file in
        your-basepath include file relative to the basepath you give
        
            ```js
                fileinclude({
                prefix: '@@',
                basepath: '@file'
                })
                fileinclude({
                prefix: '@@',
                basepath: '/home/'
                })
            ```
    3. options.basepath - type: string, 
        
        it could be @root, include file relative to the dir where gulp running in @file,   
        include file relative to the dir where file in example  
        your-basepath include file relative to the basepath you give 

- 语法
    1. `@@include` options - type: JSON

        在结构中使用 @@include 来引入所需文件，例如：`@@include('../', {json数据})`;
        `step5`
        
    2. if 语法
        
            ```js
                @@if (name === 'test' && nav === true) {
                    @@include('test.html')
                }
            ```
    
    3. for 语法

            ```js
                fileinclude({
                    context: {
                        arr: ['test1', 'test2']
                    }
                });
                
                <ul>
                    @@for (var i = 0; i < arr.length; i++) {
                        <li>`+arr[i]+`</li>
                    }
                </ul>
            ```
    4. loop 语法

        index.html
            ```html
                <body>
                    @@loop('loop-article.html', [
                        { "title": "My post title", "text": "<p>lorem ipsum...</p>" },
                        { "title": "Another post", "text": "<p>lorem ipsum...</p>" },
                        { "title": "One more post", "text": "<p>lorem ipsum...</p>" }
                    ])
                </body>
            ```

        loop-article.html

            ```html
                <article>
                <h1>@@title</h1>
                @@text
                </article>
            ```
            
        loop statement + data.json
        data.json

            ```json
                [
                { "title": "My post title", "text": "<p>lorem ipsum...</p>" },
                { "title": "Another post", "text": "<p>lorem ipsum...</p>" },
                { "title": "One more post", "text": "<p>lorem ipsum...</p>" }
                ]
            ```
            
        loop-article.html

            ```html
                <body>
                    @@loop("loop-article.html", "data.json")
                </body>
            ```
        webRoot built-in context variable
        The webRoot field of the context contains the relative path from the source document to the source root (unless the value is already set in the context options).

        example
        support/contact/index.html

            ```html
                <!DOCTYPE html>
                <html>
                <head>
                    <link type=stylesheet src=@@webRoot/css/style.css>
                </head>
                <body>
                    <h1>Support Contact Info</h1>
                    <footer><a href=@@webRoot>Home</a></footer>
                </body>
                </body>
                </html>
                and the result is:

                <!DOCTYPE html>
                <html>
                <head>
                    <link type=stylesheet src=../../css/style.css>
                </head>
                <body>
                    <h1>Support Contact Info</h1>
                    <footer><a href=../..>Home</a></footer>
                </body>
                </body>
                </html>
            ```