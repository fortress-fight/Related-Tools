# gulp 实践1

## gulp 的实际使用

### 使用

1. 创建项目 `npm init`
2. 构建 gulp 基本项
    `npm i gulp -g`  
    `npm i gulp --save-dev`
    创建 `gulpfile.js` 文件
3. 创建项目目录

    - dist -- 存放编译后文件
    - src -- 存放编译前文件
        - js
        - css
        - components
    - release -- 存放发行版本的压缩文件
    - node-module
    - gulpfile.js
    - index.html
4. 工具

    - gulp-rev  
        在文件尾部生成 MD5 后缀，然后将信息输出到 `*.json` 文件中；
    - gulp-rev-collector  
        将修改后的文件根据生成的 `*.json` 关联到 html 中
    - gulp-file-include