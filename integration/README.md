# 校园信息中心

课堂作业八 · 案例复现（第一步）

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
├── data/
└── three-d/scene.html
```

## 库与资源来源

库文件均为开源版本，存放于本地 `libs/`：

| 库 | 来源 |
| --- | --- |
| Bootstrap | [getbootstrap.com](https://getbootstrap.com/) |
| jQuery 3.7.1 | [jquery.com](https://jquery.com/) |
| ECharts | [echarts.apache.org](https://echarts.apache.org/)（第二步使用） |
| Chart.js | [chartjs.org](https://www.chartjs.org/)（备选） |