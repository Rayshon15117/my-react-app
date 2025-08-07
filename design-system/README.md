# 🎨 Figma-Based Design System

基于 Figma 设计稿自动生成的设计系统，包含完整的 tokens、组件和工具函数。

## 📋 目录结构

```
design-system/
├── components/          # 可复用 UI 组件
│   ├── Button.jsx      # 按钮组件
│   ├── Input.jsx       # 输入框组件
│   ├── Card.jsx        # 卡片组件
│   └── index.js        # 组件统一导出
├── tokens/             # 设计 Tokens
│   ├── colors.js       # 颜色系统
│   ├── spacing.js      # 间距系统
│   ├── typography.js   # 字体排版
│   └── index.js        # Tokens 统一导出
├── hooks/              # 通用 Hooks
│   └── useMediaQuery.js # 响应式媒体查询
├── DesignSystemPreview.jsx # 设计系统预览页面
├── index.js            # 设计系统主入口
└── README.md           # 本文档
```

## 🚀 快速开始

### 导入整个设计系统

```jsx
import designSystem from './design-system/index.js';

// 使用组件
const { Button, Input, Card } = designSystem.components;

// 使用 tokens
const { colors, spacing, typography } = designSystem.tokens;

// 使用 hooks
const { useBreakpoint, useMediaQuery } = designSystem.hooks;
```

### 按需导入

```jsx
// 导入特定组件
import { Button, Input, Card } from './design-system/components/index.js';

// 导入特定 tokens
import { colors, spacing, typography } from './design-system/tokens/index.js';

// 导入特定 hooks
import { useBreakpoint, useMediaQuery } from './design-system/hooks/useMediaQuery.js';
```

## 🎨 设计 Tokens

### 颜色系统

```jsx
import { colors } from './design-system/tokens/index.js';

// 主色调
colors.primary[500]  // 主色
colors.primary[400]  // 中深色
colors.primary[300]  // 中色

// 强调色
colors.accent.green  // 绿色强调

// 语义化颜色
colors.semantic.success  // 成功色
colors.semantic.error    // 错误色
colors.semantic.warning  // 警告色
colors.semantic.info     // 信息色
```

### 间距系统

```jsx
import { spacing } from './design-system/tokens/index.js';

// 基础间距
spacing.xs    // 4px
spacing.sm    // 8px
spacing.md    // 16px
spacing.lg    // 24px
spacing.xl    // 32px
spacing['2xl'] // 48px

// 组件特定间距
spacing.button.padding    // 按钮内边距
spacing.card.padding      // 卡片内边距
spacing.input.padding     // 输入框内边距
```

### 字体排版

```jsx
import { typography } from './design-system/tokens/index.js';

// 字体大小
typography.fontSize.xs    // 11px
typography.fontSize.sm    // 12px
typography.fontSize.base  // 13px
typography.fontSize.md    // 14px
typography.fontSize.lg    // 15px
typography.fontSize.xl    // 16px

// 预定义文本样式
typography.textStyles.h1      // 标题1样式
typography.textStyles.h2      // 标题2样式
typography.textStyles.body    // 正文样式
typography.textStyles.button  // 按钮文本样式
```

## 🔧 组件使用

### Button 组件

```jsx
import { Button } from './design-system/components/index.js';

// 基础用法
<Button>点击我</Button>

// 变体
<Button variant="primary">主要按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button variant="accent">强调按钮</Button>

// 尺寸
<Button size="sm">小按钮</Button>
<Button size="md">中按钮</Button>
<Button size="lg">大按钮</Button>
<Button size="xl">超大按钮</Button>

// 状态
<Button disabled>禁用按钮</Button>
```

### Input 组件

```jsx
import { Input } from './design-system/components/index.js';

// 基础用法
<Input placeholder="请输入内容" />

// 带标签
<Input label="用户名" placeholder="请输入用户名" />

// 必填字段
<Input label="邮箱" type="email" required />

// 错误状态
<Input label="密码" type="password" error="密码不能为空" />

// 尺寸
<Input size="sm" placeholder="小输入框" />
<Input size="md" placeholder="中输入框" />
<Input size="lg" placeholder="大输入框" />
```

### Card 组件

```jsx
import { Card } from './design-system/components/index.js';

// 基础用法
<Card>
  <p>卡片内容</p>
</Card>

// 变体
<Card variant="default">默认卡片</Card>
<Card variant="elevated" shadow="lg">阴影卡片</Card>
<Card variant="outlined">轮廓卡片</Card>
<Card variant="filled">填充卡片</Card>

// 使用子组件
<Card>
  <Card.Header>
    <h3>卡片标题</h3>
  </Card.Header>
  <Card.Body>
    <p>卡片正文内容</p>
  </Card.Body>
  <Card.Footer>
    <Button>操作按钮</Button>
  </Card.Footer>
</Card>
```

## 📱 响应式 Hooks

### useBreakpoint

```jsx
import { useBreakpoint } from './design-system/hooks/useMediaQuery.js';

function MyComponent() {
  const breakpoint = useBreakpoint();
  
  return (
    <div>
      <p>当前断点: {breakpoint.current}</p>
      <p>是否为移动设备: {breakpoint.isMobileDevice ? '是' : '否'}</p>
      <p>是否为桌面设备: {breakpoint.isDesktopDevice ? '是' : '否'}</p>
    </div>
  );
}
```

### useMediaQuery

```jsx
import { useMediaQuery } from './design-system/hooks/useMediaQuery.js';

function MyComponent() {
  const isMobile = useMediaQuery('mobile');
  const isTablet = useMediaQuery('tablet');
  const isDesktop = useMediaQuery('desktop');
  
  return (
    <div>
      {isMobile && <p>移动端内容</p>}
      {isTablet && <p>平板端内容</p>}
      {isDesktop && <p>桌面端内容</p>}
    </div>
  );
}
```

## 🎯 设计原则

1. **一致性**: 保持设计的一致性，所有组件都基于相同的设计 tokens
2. **可访问性**: 确保组件具有良好的可访问性
3. **可扩展性**: 支持轻松扩展和定制
4. **可维护性**: 易于维护和更新

## 🔄 更新设计系统

当 Figma 设计稿更新时，可以重新运行分析脚本来更新设计系统：

```bash
# 重新分析 Figma 设计稿
node figma-export.js
node analyze-figma.js
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个设计系统。

---

**基于 Figma 设计稿自动生成** | 版本 1.0.0 | 最后更新 2025-01-07 