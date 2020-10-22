# Blog

## 1. 安装 node.js

## 2. Gitpages

fork 仓库 https://github.com/Tsanfer/vuepress_theme_reco-Github_Actions

我将仓库重命名为了 blog

下载仓库到本地

```sh
git clone https://github.com/DayoWong0/blog
```

---

docs/.vuepress/config.js 中加上这一句

```json
  base: '/blog/',
```

---

生成静态文件

```shell
npm run docs:build
```

```bash
# 进入生成的文件夹
cd docs/.vuepress/dist
```

推送到 gh-pages 分支去

```shell
git init
git add -A
git commit -m 'deploy'
```

---

```shell
git push -f git@github.com:DayoWong0/blog.git master:gh-pages
```

等待一会，打开 https://dayowong0.github.io/blog/ 成功。

再根据自己的需求参考官方文档修改 config.js 配置文件。

## 3. 自动部署

根目录下新建 .travis.yml

内容

```yaml
language: node_js
node_js:
  - lts/*
install:
  - npm install # npm ci
script:
  - npm run docs:build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: master #这里指的是部署前的源文件分支

```

配置 travis token

删除 GitAction 相关配置-- 删除 .github 文件夹

Github 推送不上去，网络错误。换了几个节点 终于可以了

看 Travis 构建日志，构建成功，推送错误，看了提示，大概意思是：网页文件没变化，不用推送。

改变一下 md 内容，再推送试试。删除一篇文章试试，可以的。



#### 文章书写

```markdown
---
title: vuepress-theme-reco + Github Actions 搭建静态博客，自动构建部署到第三方服务器
date: 2020-03-21
sidebar: "auto"
categories:
  - 前端
tags:
  - VuePress
  - Github
  - 博客
  - 持续集成
---
## 正文
```

顾名思义 标题 标签等 完成。

#### 删除与之前仓库相关的信息

算了 不搞了 麻烦 没必要

