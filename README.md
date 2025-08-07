# 个人网页重构项目

基于 Figma 设计的极简主义个人网页，采用组件化架构和设计系统。

## 🎨 设计理念

- **极简风格**: 简洁而不失优雅的设计语言
- **组件化思想**: 每个功能模块独立封装，便于维护和复用
- **设计系统**: 统一的颜色、字体、间距等设计令牌
- **响应式设计**: 完美适配桌面、平板、移动端

## 🏗️ 组件架构

项目采用 7 个核心组件的模块化架构：

```
src/sections/
├── AvatarHero.jsx      # 01. 头像区/背景图
├── BioHeader.jsx       # 02. 名称 + 一句话简介
├── SocialStrip.jsx     # 03. 社媒链接条
├── ResumeTimeline.jsx  # 04. 个人履历时间线
├── PortfolioGallery.jsx # 05. 作品集网格
├── ContactSection.jsx  # 06. 联系我表单
└── GlobalFooter.jsx    # 07. 页脚版权信息
```

### 组件详情

1. **AvatarHero** - 头像展示区域，包含大型头像和背景装饰
2. **BioHeader** - 个人信息展示，包含姓名、职位和描述
3. **SocialStrip** - 社交媒体链接，支持悬停效果
4. **ResumeTimeline** - 工作经历和教育背景时间线
5. **PortfolioGallery** - 项目作品展示网格
6. **ContactSection** - 联系表单和联系信息
7. **GlobalFooter** - 页脚版权和技术栈信息

## 🎨 设计系统

### 颜色系统

基于 Figma 设计提取的 7 级灰度 + 绿色强调色：

```javascript
colors = {
  primary: {
    50: 'rgb(233, 235, 223)',   // 最浅
    100: 'rgb(203, 204, 196)',  // 浅色
    200: 'rgb(139, 134, 127)',  // 中浅
    300: 'rgb(67, 62, 56)',     // 中等
    400: 'rgb(36, 36, 36)',     // 中深
    500: 'rgb(21, 21, 21)',     // 主色
    600: 'rgb(14, 53, 44)',     // 深色
  },
  accent: {
    green: 'rgb(5, 223, 114)',  // 绿色强调
  }
}
```

### 字体系统

使用 Inter 字体族，支持多种字重：

```javascript
typography = {
  fontFamily: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  fontSize: {
    xs: '11px',
    sm: '12px',
    base: '13px',
    md: '14px',
    lg: '15px',
    xl: '16px',
    '2xl': '18px',
    '3xl': '20px',
    '4xl': '24px',
    '5xl': '30px',
    '6xl': '45px',
    '7xl': '60px',
  }
}
```

## 🛠️ 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **CSS-in-JS** - 内联样式解决方案
- **设计系统** - 自定义设计令牌系统

## 📱 响应式设计

- **桌面端**: 1920px+
- **平板端**: 768px - 1200px
- **移动端**: 320px - 768px

## 🎯 验收标准

✅ **App 组件极为干净整洁** - 仅包含 7 个主要组件的引用  
✅ **组件化思想** - 每个功能模块独立封装  
✅ **优秀的文件结构** - 清晰的目录组织和命名规范  
✅ **完美遵循设计系统** - 统一的颜色、字体、间距  
✅ **极简风格** - 简洁而不失优雅的设计  

## 🚀 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
my-react-app/
├── src/
│   ├── sections/           # 页面组件
│   │   ├── AvatarHero.jsx      # 01. 头像区/背景图
│   │   ├── BioHeader.jsx       # 02. 名称 + 一句话简介
│   │   ├── SocialStrip.jsx     # 03. 社媒链接条
│   │   ├── ResumeTimeline.jsx  # 04. 个人履历时间线
│   │   ├── PortfolioGallery.jsx # 05. 作品集网格
│   │   ├── ContactSection.jsx  # 06. 联系我表单
│   │   └── GlobalFooter.jsx    # 07. 页脚版权信息
│   ├── App.jsx            # 主应用组件 (极为干净整洁)
│   ├── App.css            # 应用样式
│   └── index.css          # 全局样式
├── design-system/         # 设计系统
│   ├── tokens/            # 设计令牌
│   │   ├── colors.js      # 颜色系统
│   │   ├── typography.js  # 字体系统
│   │   └── spacing.js     # 间距系统
│   └── components/        # 基础组件
└── public/               # 静态资源
```

## 🎨 Figma 设计

基于 Figma 设计稿重构，完美还原设计意图：
- 颜色系统完全匹配
- 字体精确还原
- 布局结构一致
- 交互效果忠实实现

---

*"保持好奇心，持续构建，永不停止学习。"*
