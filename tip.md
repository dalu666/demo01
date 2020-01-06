## React 三大体系
React.js 用于Web开发和组件的编写
ReactNative 用于移动端开发
ReactVR 用于虚拟现实技术的开发
## React VS VUE
React 灵活性和协作上更好一些，团队开发，他都是函数式编程，把大网页拆成一小块一小块，灵活性比vue好一些。
vue 有着丰富的api插件和框架 实现起来简单快速
## React 起步 安装
npm install -g create-react-app
## React 创建项目
create-react-app demo（项目名）
## 启动项目
npm start
## PWA 了解
PWA 主要移动端，第一次浏览网页是有网络的，第二次可以离线浏览
##  
import React,{Component} from 'react' 意思是

import React from 'react'
const Component=React.Component
## className 命名
## 自定义组件首字母要大写
## jsx中用 {} 写 js语法
## import React,{Component,Fragment} from "react"
 用Fragment 代替最外层的标签div
## jsx 中注释
1. {/* 阿斯蒂芬 */}

2. 要换行
{ 
    //注释 
}
## 解析html
dangerouslySetInnerHTML={{__HTML:<h2>标签</h2>}}
## htmlFor 代替label中的for
## VScode 安装Simple React Snippets 插件
js输入 cc 回车 会生成相应内容
## 父组件传值
父标签定义一个content属性
子接收  {this.props.content}
## 单项数据流 子组件不能直接修改数据
## 函数时编程优势 
1.测试方便
2.结构清晰，每个函数代表一个方法

## 谷歌调试工具 更多 添加
React Developer Tools
## propTypes 校验传值
## 生命周期
initialization 初始化阶段
mounting 虚拟demo阶段
updation 更新阶段
unmounting 卸载阶段
## https://www.easy-mock.com/ 创建接口

## react-transition-group 动画库