# Joydivisor · 个人主页

**访问网址：https://joydivisor.github.io/**

简洁的个人作品主页，使用暖白、橄榄绿与古典衬线字体，支持简体中文、繁体中文、English，适配桌面与手机。

## 精选作品

### 欧陆纪年 · Europa Chronica

覆盖公元前 500 年至 2024 年的欧洲历史交互地图，包含时间轴、历史疆域、自然地理图层、城市沿革、政权档案与人物行旅。

- **[打开地图](https://joydivisor.github.io/europa-chronica/)**
- **[查看项目与 README](https://github.com/Joydivisor/europa-chronica)**
- 开源许可：**GPL-3.0-only**；第三方数据与字体保留各自许可。

## 本地运行

```sh
git clone https://github.com/Joydivisor/Joydivisor.github.io.git
cd Joydivisor.github.io
python3 -m http.server 8000
```

打开 http://localhost:8000。网站使用原生 HTML、CSS 与 JavaScript，无构建依赖。地图入口指向独立项目的 `/europa-chronica/` 路径；仅运行主页时，使用线上地图网址访问。

## 更新与部署

- `index.html`：页面结构、项目链接与搜索引擎元信息。
- `style.css`：配色、圆角控件、响应式布局与减少动态效果适配。
- `app.js`：三语文本、语言偏好和键盘切换。
- `assets/`：本地字体、图标与项目地图预览。

推送到 `main` 后，GitHub Actions 自动将页面发布到 GitHub Pages。**Settings → Pages → Source** 使用 **GitHub Actions**。

## License

原创程序、页面与文档使用 [GNU GPL v3.0 only](LICENSE)。Cormorant Garamond 与 Cinzel 字体使用 SIL OFL 1.1；地图预览包含 CC BY 4.0 的 Cliopatria 衍生数据与公共领域地理数据。完整署名见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

Copyright © 2026 Joydivisor and contributors.
