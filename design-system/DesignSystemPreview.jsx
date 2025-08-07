import React, { useState } from 'react';
import designSystem, { 
  colors, 
  spacing, 
  typography, 
  Button, 
  Input, 
  Card,
  useBreakpoint 
} from './index.js';

const DesignSystemPreview = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const breakpoint = useBreakpoint();

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: spacing.xl,
    fontFamily: typography.fontFamily.primary,
    backgroundColor: colors.neutral.gray[50],
    minHeight: '100vh',
  };

  const sectionStyle = {
    marginBottom: spacing['5xl'],
  };

  const sectionTitleStyle = {
    ...typography.textStyles.h2,
    color: colors.primary[500],
    marginBottom: spacing.xl,
    borderBottom: `2px solid ${colors.accent.green}`,
    paddingBottom: spacing.md,
  };

  const subsectionTitleStyle = {
    ...typography.textStyles.h3,
    color: colors.primary[400],
    marginBottom: spacing.lg,
    marginTop: spacing.xl,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: breakpoint.isMobileDevice ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: spacing.lg,
    marginBottom: spacing.xl,
  };

  const colorSwatchStyle = (color) => ({
    backgroundColor: color,
    padding: spacing.lg,
    borderRadius: '8px',
    border: `1px solid ${colors.neutral.gray[200]}`,
    textAlign: 'center',
    color: color.includes('255, 255, 255') ? colors.primary[500] : colors.neutral.white,
    fontFamily: typography.fontFamily.mono,
    fontSize: typography.fontSize.sm,
  });

  const spacingExampleStyle = (size) => ({
    backgroundColor: colors.accent.green,
    width: size,
    height: '20px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.neutral.white,
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.mono,
  });

  return (
    <div style={containerStyle}>
      {/* 头部信息 */}
      <div style={sectionStyle}>
        <h1 style={{ ...typography.textStyles.h1, color: colors.primary[500], marginBottom: spacing.md }}>
          🎨 设计系统预览
        </h1>
        <p style={{ ...typography.textStyles.body, color: colors.primary[400], marginBottom: spacing.lg }}>
          基于 Figma 设计稿自动生成的设计系统 v{designSystem.version}
        </p>
        <Card variant="filled" padding="lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md }}>
            <div>
              <strong>当前断点:</strong> {breakpoint.current}
            </div>
            <div>
              <strong>Figma 文件:</strong> {designSystem.config.figmaFileId}
            </div>
            <div>
              <strong>最后更新:</strong> {designSystem.config.lastUpdated}
            </div>
          </div>
        </Card>
      </div>

      {/* 颜色系统 */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🎨 颜色系统</h2>
        
        <h3 style={subsectionTitleStyle}>主色调</h3>
        <div style={gridStyle}>
          {Object.entries(colors.primary).map(([key, color]) => (
            <div key={key}>
              <div style={colorSwatchStyle(color)}>
                {color}
              </div>
              <p style={{ textAlign: 'center', marginTop: spacing.sm, fontSize: typography.fontSize.sm }}>
                primary.{key}
              </p>
            </div>
          ))}
        </div>

        <h3 style={subsectionTitleStyle}>强调色</h3>
        <div style={gridStyle}>
          {Object.entries(colors.accent).map(([key, color]) => (
            <div key={key}>
              <div style={colorSwatchStyle(color)}>
                {color}
              </div>
              <p style={{ textAlign: 'center', marginTop: spacing.sm, fontSize: typography.fontSize.sm }}>
                accent.{key}
              </p>
            </div>
          ))}
        </div>

        <h3 style={subsectionTitleStyle}>语义化颜色</h3>
        <div style={gridStyle}>
          {Object.entries(colors.semantic).map(([key, color]) => (
            <div key={key}>
              <div style={colorSwatchStyle(color)}>
                {color}
              </div>
              <p style={{ textAlign: 'center', marginTop: spacing.sm, fontSize: typography.fontSize.sm }}>
                semantic.{key}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 间距系统 */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>📏 间距系统</h2>
        
        <h3 style={subsectionTitleStyle}>基础间距</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md, alignItems: 'center' }}>
          {['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'].map((size) => (
            <div key={size} style={{ textAlign: 'center' }}>
              <div style={spacingExampleStyle(spacing[size])}>
                {spacing[size]}
              </div>
              <p style={{ marginTop: spacing.sm, fontSize: typography.fontSize.sm }}>
                spacing.{size}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 字体排版 */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>📝 字体排版</h2>
        
        <h3 style={subsectionTitleStyle}>标题样式</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
          <h1 style={{ ...typography.textStyles.h1, color: colors.primary[500] }}>
            Heading 1 - 主要标题
          </h1>
          <h2 style={{ ...typography.textStyles.h2, color: colors.primary[500] }}>
            Heading 2 - 次级标题
          </h2>
          <h3 style={{ ...typography.textStyles.h3, color: colors.primary[500] }}>
            Heading 3 - 三级标题
          </h3>
          <h4 style={{ ...typography.textStyles.h4, color: colors.primary[500] }}>
            Heading 4 - 四级标题
          </h4>
        </div>

        <h3 style={subsectionTitleStyle}>正文样式</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
          <p style={{ ...typography.textStyles.body, color: colors.primary[400] }}>
            这是正文文本，用于展示主要的阅读内容。基于 Figma 设计稿自动生成，确保与设计稿保持一致。
          </p>
          <p style={{ ...typography.textStyles.bodySmall, color: colors.primary[400] }}>
            这是小号正文文本，用于次要信息或说明文字。
          </p>
          <p style={{ ...typography.textStyles.caption, color: colors.primary[400] }}>
            这是说明文字，用于注释、标签等小字信息。
          </p>
        </div>

        <h3 style={subsectionTitleStyle}>字体大小</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md, alignItems: 'baseline' }}>
          {Object.entries(typography.fontSize).map(([key, size]) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: size, 
                color: colors.primary[500],
                fontFamily: typography.fontFamily.primary,
                lineHeight: 1.2,
              }}>
                {key}
              </div>
              <p style={{ marginTop: spacing.sm, fontSize: typography.fontSize.sm }}>
                {size}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 按钮组件 */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🔘 按钮组件</h2>
        
        <h3 style={subsectionTitleStyle}>按钮变体</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md, alignItems: 'center' }}>
          <Button variant="primary">主要按钮</Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="ghost">幽灵按钮</Button>
          <Button variant="accent">强调按钮</Button>
        </div>

        <h3 style={subsectionTitleStyle}>按钮尺寸</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md, alignItems: 'center' }}>
          <Button size="sm">小按钮</Button>
          <Button size="md">中按钮</Button>
          <Button size="lg">大按钮</Button>
          <Button size="xl">超大按钮</Button>
        </div>

        <h3 style={subsectionTitleStyle}>按钮状态</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md, alignItems: 'center' }}>
          <Button>正常状态</Button>
          <Button disabled>禁用状态</Button>
        </div>
      </section>

      {/* 输入框组件 */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>📝 输入框组件</h2>
        
        <h3 style={subsectionTitleStyle}>基础输入框</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg, maxWidth: '400px' }}>
          <Input
            label="用户名"
            placeholder="请输入用户名"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            label="邮箱"
            type="email"
            placeholder="your@email.com"
            required
          />
          <Input
            label="密码"
            type="password"
            placeholder="请输入密码"
          />
        </div>

        <h3 style={subsectionTitleStyle}>输入框尺寸</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg, maxWidth: '400px' }}>
          <Input size="sm" placeholder="小尺寸输入框" />
          <Input size="md" placeholder="中尺寸输入框" />
          <Input size="lg" placeholder="大尺寸输入框" />
        </div>

        <h3 style={subsectionTitleStyle}>输入框状态</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg, maxWidth: '400px' }}>
          <Input placeholder="正常状态" />
          <Input placeholder="禁用状态" disabled />
          <Input placeholder="错误状态" error="这是一个错误信息" />
        </div>
      </section>

      {/* 卡片组件 */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🃏 卡片组件</h2>
        
        <h3 style={subsectionTitleStyle}>卡片变体</h3>
        <div style={gridStyle}>
          <Card variant="default" padding="lg">
            <Card.Header>
              <h3 style={{ margin: 0, ...typography.textStyles.h3 }}>默认卡片</h3>
            </Card.Header>
            <Card.Body>
              <p style={{ ...typography.textStyles.body, margin: 0 }}>
                这是一个默认样式的卡片，包含头部、正文和底部。
              </p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">操作按钮</Button>
            </Card.Footer>
          </Card>

          <Card variant="elevated" padding="lg" shadow="lg">
            <Card.Header>
              <h3 style={{ margin: 0, ...typography.textStyles.h3 }}>阴影卡片</h3>
            </Card.Header>
            <Card.Body>
              <p style={{ ...typography.textStyles.body, margin: 0 }}>
                这是一个带有阴影效果的卡片，用于突出显示重要内容。
              </p>
            </Card.Body>
          </Card>

          <Card variant="outlined" padding="lg">
            <Card.Header>
              <h3 style={{ margin: 0, ...typography.textStyles.h3 }}>轮廓卡片</h3>
            </Card.Header>
            <Card.Body>
              <p style={{ ...typography.textStyles.body, margin: 0 }}>
                这是一个轮廓样式的卡片，适合在浅色背景上使用。
              </p>
            </Card.Body>
          </Card>

          <Card variant="filled" padding="lg">
            <Card.Header>
              <h3 style={{ margin: 0, ...typography.textStyles.h3 }}>填充卡片</h3>
            </Card.Header>
            <Card.Body>
              <p style={{ ...typography.textStyles.body, margin: 0 }}>
                这是一个填充样式的卡片，带有背景色。
              </p>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* 响应式设计 */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>📱 响应式设计</h2>
        
        <Card variant="filled" padding="lg">
          <h3 style={{ marginTop: 0, ...typography.textStyles.h3 }}>当前设备信息</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md }}>
            <div>
              <strong>当前断点:</strong> {breakpoint.current}
            </div>
            <div>
              <strong>是否为移动设备:</strong> {breakpoint.isMobileDevice ? '是' : '否'}
            </div>
            <div>
              <strong>是否为桌面设备:</strong> {breakpoint.isDesktopDevice ? '是' : '否'}
            </div>
          </div>
        </Card>
      </section>

      {/* 页脚 */}
      <footer style={{ 
        textAlign: 'center', 
        padding: spacing.xl, 
        borderTop: `1px solid ${colors.neutral.gray[200]}`,
        marginTop: spacing['5xl'],
        color: colors.primary[400],
      }}>
        <p style={{ ...typography.textStyles.bodySmall, margin: 0 }}>
          🎨 基于 Figma 设计稿自动生成的设计系统 | 
          版本 {designSystem.version} | 
          最后更新 {designSystem.config.lastUpdated}
        </p>
      </footer>
    </div>
  );
};

export default DesignSystemPreview; 