# tinytoy-heartconnect
## 心有灵犀

![icon.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7ad006c54b94340999a3628d990e325~tplv-k3u1fbpfcp-watermark.image?)

这是情侣之间互相安装的一个小软件，是一颗可以跳动的心。当你在想对方的时候，就点击一下红心，对方的红心会同时跳动一下。如果对方在收到红心跳动的1.5秒内回应一个点击，则你会收到一个新的音效，代表你们同时在想对方。

也就是 心有灵犀 了！

# 作者介绍

<p>

![](https://img.shields.io/badge/dynamic/json?labelColor=FE7398&logo=bilibili&logoColor=white&label=B站粉丝&color=00aeec&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dbilibili%26queryKey%3D422646817)
![](https://img.shields.io/github/stars/ezshine?color=faf408&label=github stars&logo=github)
![](https://img.shields.io/badge/dynamic/json?label=掘金粉丝&logo=swagger&logoColor=white&query=%24.data.follower_count&url=https%3A%2F%2Fapi.juejin.cn%2Fuser_api%2Fv1%2Fuser%2Fget%3Fuser_id%3D2955079655898093)
![](https://img.shields.io/badge/-大帅老猿-07c160?logo=wechat&logoColor=white&label=wechat)

</p>

# 特别注意

由于你一直没有响应，或某些特殊网络原因导致你收不到心跳，由此引发的关系恶化，本UP概不负责。

# 安装方法

- 下载可执行文件
> 从 Actions 最新的 Build 中下载对应系统的可执行文件即可。

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

打开安装目录，找到`channel.txt`，修改其中的值，自定义为自己的通道标识`任意英文字母的组合`

## 通讯服务

这里我采用的技术方案，是[croquet](https://croquet.io/)，免费的 websocket 服务。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c061687d2f7b4e52b6f6042e2cd89041~tplv-k3u1fbpfcp-watermark.image?)

这个免费服务还是有上限的，随着这个软件的用户越来越多，我个人申请的免费服务额度可能不够用。
最好的办法是你自己申请一个自己的`API Key`。并在 index.html 中替换我的`Key`。

# 交流社群

- QQ群                                  🈳 `大量空位` 🈶 `少量空位` 🈵 `极少空位`

|名称|QQ号|人数上限 |
|-|-|-|
|彩虹屁编程社群#4|1059850921|2000 🈳|
|彩虹屁编程社群#3|1108750812|2000 🈵|
|彩虹屁编程社群#2|610394408|2000 🈶|
|彩虹屁编程社群#1|1026509663|2000 🈵|

- 微信群               `进群请加微信：dashuailaoyuan`

|名称|人数上限|
|-|-|
|编程猿创营 微信#1|500 🈳|
|编程猿创营 微信#2|500 🈳|
|编程猿创营 微信#3|500 🈳|
