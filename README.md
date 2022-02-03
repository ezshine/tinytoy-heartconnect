# tinytoy-heartconnect
## 心有灵犀

![icon.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7ad006c54b94340999a3628d990e325~tplv-k3u1fbpfcp-watermark.image?)

这是情侣之间互相安装的一个小软件，是一颗可以跳动的心。如果情侣中的某人点击这颗心，则两个人的心都会同时跳动。

1. 也就是说如果你没有点击，但是发现心跳动了，则代表对方在想你。
2. 如果你能在收到心跳的1.5秒内也点击一次，则对方会收到一个新的音效，代表你们心有灵犀了！

# 特别注意

由于你一直不响应，或某些特殊网络原因导致你收不到心跳，由此引发的关系恶化，本UP概不负责。

# 安装方法

- 下载可执行文件
> 从 Release 中下载对应系统的可执行文件即可。

- 下载源码本地编译
~~~js
git clone git@github.com:ezshine/tinytoy-heartconnect.git
cd tinytoy-heartconnect
cd src
npm install
~~~

~~~js
//编译苹果系统版
npm run buildmac
//编译windows版
npm run buildwin
~~~

# 更改通讯通道配置
> 一定要记得更改配置，否则会接收到测试通道的信息。

