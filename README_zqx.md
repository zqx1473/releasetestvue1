# 目录结构
## 创建完成后
> node_modules -- 项目依赖文件，其中包括很多基础依赖和自己安装的依赖  
>> \*
> 
> public -- 存放公共资源和项目的index.html  
>> favicon.ico -- 浏览器显示图标  
>> index.html -- 主入口html  
> 
> src -- 项目核心文件夹（开发的工作目录）  
>> assets -- 资源模块  
>>> logo.png -- logo图片  
>> 
>> components -- 组件目录   
>>> HelloWorld.vue --   
>> 
>> router -- 路由目录  
>>> index.js -- 路由JS  
>> 
>> store -- 状态管理目录  
>>> index.js -- 状态管理JS  
>> 
>> views -- 视图目录（包含路由对应文件）  
>>> AboutView.vue -- 二级视图  
>>> HomeView.vue --   
>> 
>> App.vue -- 根组件（路由组件的顶层路由） 
>> main.js -- JS入口（vue入口文件）  
> 
> .browserslistrc --   
> .editorconfig --   
> .eslintrc.js --   
> .gitignore -- Git上传时需要忽略的文件目录  
> babel.config.js --   
> jsconfig.json --   
> package.json -- 项目的基本配置信息文件，包括各种插件，依赖以及某些依赖的详细配置等  
> package-lock.json -- 版本管理使用的文件  
> README.md -- 项目的描述文件  
> vue.config.js --   


## 工作用法
> node_modules -- 依赖包  
>> \*
> 
> public -- 公共静态资源目和index.html  
>> favicon.ico -- 浏览器显示图标  
>> 3、index.html -- 主入口html（提供一个div给vue挂载）  
> 
> src -- 核心目录  
>> assets -- （放置静态资源：图片、图标、字体……）  
>>> logo.png --   
>> 
>> components -- 组件目录   
>>> 7、HelloWorld.vue --   
>> 
>> router --   
>>> 6、index.js -- 路由JS  
>> 
>> store --   
>>> index.js -- 状态管理JS  
>> 
>> views --   
>>> AboutView.vue --   
>>> HomeView.vue --   
>> 
>> 5、App.vue -- 根组件  
>> 4、main.js -- JS入口  
> 
> .browserslistrc --   
> .editorconfig --   
> .eslintrc.js --   
> .gitignore -- Git上传时需要忽略的文件目录  
> babel.config.js --   
> jsconfig.json --   
> 1、package.json -- 项目的基本配置信息文件，包括各种插件，依赖以及某些依赖的详细配置等  
> package-lock.json -- 版本管理使用的文件  
> README.md -- 项目的描述文件  
> 2、vue.config.js --   