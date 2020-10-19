# 指南

## 介绍
这整个网站是展示了一个简单的VuePress案例模板，目的是用户可以直接clone这个仓库，作为初始化一个VuePress网站启动项目，然后在这个项目的基础上新增自定义配置和功能。

除此之外，还展示一些插件的使用案例，参考[插件](./plugin)

## 为什么建这个模板站？
有部分刚接触VuePress的同学，按照官方教程操作下来会遇到大大小小的问题，特别是文件目录、打包、插件安装这几块内容。如果直接复制官方的仓库又会比较大，所以如果有一个这样的简洁的初始模板，直接启动使用就很方便了。

而且对应的插件能直接看到效果，使用起来更能得心应手。

## 用法

### 第一步

下载 Vuepress Template 的仓库代码
```sh
git clone https://github.com/openHacking/vuepress-template.git
```

### 第二步
安装依赖
```sh
cd vuepress-template
yarn # 或者npm i
```

### 第三步
启动项目，随后即可根据自己的需求修改配置、编写文档内容
```sh
npm run docs:dev
```

### 第四步
打包项目
```sh
npm run docs:build
```
结果会在`docs/.vuepress/`目录下生成一个`dist`文件夹，里面就是打包后的代码