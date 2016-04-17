## react,webpack简单项目

### 如何运行?
#### 1.获取依赖库
```sh
npm install
```

#### 2.打包
```sh
webpack
```

#### 3.浏览器打开文件测试,我这里使用的是mac的open命令,浏览器会自动打开
```sh
open index.html
```


##### 开发的时候我使用webpack-dev-server实现实时更新,方便开发,方法如下:
```sh
./node_module/.bin/webpack-dev-server
```
##### 打开浏览器测试
```sh
open http://localhost:8080/
```


