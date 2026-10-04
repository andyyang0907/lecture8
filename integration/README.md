# 校园信息中心

课堂作业八 · 案例复现：迷你版校园公共信息与数据展示中心

## 项目简介

跟随教师演示分三步搭建"校园信息中心"骨架，体验"课堂成果 → 综合作品"的组装路径：

1. **第一步：入口与首页** — Bootstrap 导航 + 首页卡片区块
2. **第二步：查询交互与图表** — 自习室楼层/开放状态筛选 + ECharts 柱状图
3. **第三步：三维区与质量自查** — A-Frame 校园地标场景

## 运行方式

任选其一：

1. **本地静态服务（推荐）**
   ```bash
   cd integration
   python3 -m http.server 8000
   # 浏览器打开 http://localhost:8000/
   ```

2. **双击打开**
   ```bash
   # 直接用浏览器打开 integration/index.html
   ```

## 目录说明

```
integration/
├── index.html
├── study-rooms.html
├── stats.html
├── css/style.css
├── js/app.js
├── libs/
├── data/data.json
└── three-d/scene.html
```

## 库与资源来源

库文件均为开源版本，存放于本地 `libs/`：

| 库 | 来源 |
| --- | --- |
| Bootstrap | [getbootstrap.com](https://getbootstrap.com/) |
| jQuery 3.7.1 | [jquery.com](https://jquery.com/) |
| ECharts | [echarts.apache.org](https://echarts.apache.org/) |
| Chart.js | [chartjs.org](https://www.chartjs.org/)（备选） |
| A-Frame | [aframe.io](https://aframe.io/)（三维场景使用） |

三维场景（教学楼、旗杆、路灯）移植自参考实现 `lecture7/three-d/campus.html`。

`data/data.json` 为本案例复现所用的模拟数据。