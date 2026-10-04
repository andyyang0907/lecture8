# 火箭家族

课堂作业八 · 自主实践：介绍火箭的网页，期末大作业的原型。

## 项目简介

四页结构，主题"火箭"：

1. **家族（index.html）** — 火箭卡片网格，点击进入详情
2. **详情（detail.html）** — 单个火箭参数 + 全部火箭高度与近地轨道运载对比图
3. **发展史（timeline.html）** — 火箭发展史时间线
4. **结构三维（three-d/scene.html）** — A-Frame 火箭结构（鼻锥 + 箭体 + 喷嘴 + 火焰）

## 运行方式

```bash
cd rockets
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/
```

或直接双击 `index.html`（部分功能如 JSON 加载需本地服务器）。

## 目录说明

```
rockets/
├── index.html
├── detail.html
├── timeline.html
├── css/style.css
├── js/app.js
├── data/rockets.json
├── libs/
└── three-d/scene.html
```

## 库与资源来源

库文件均为开源版本，存放于本地 `libs/`：

| 库 | 来源 |
| --- | --- |
| Bootstrap | [getbootstrap.com](https://getbootstrap.com/) |
| jQuery 3.7.1 | [jquery.com](https://jquery.com/) |
| ECharts | [echarts.apache.org](https://echarts.apache.org/) |
| A-Frame | [aframe.io](https://aframe.io/)（三维场景使用） |

`data/rockets.json` 为模拟数据，参数取自公开技术资料的近似值。

三维场景结构移植自本仓库 `integration/three-d/scene.html` 的 A-Frame 写法（鼻锥/箭体/喷嘴替换为火箭部件）。
