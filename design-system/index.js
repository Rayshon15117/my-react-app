// 🌟 设计系统主入口
// 基于 Figma 设计稿自动生成的设计系统

// 导出所有 Tokens
export * from './tokens/index.js';
export { default as tokens } from './tokens/index.js';

// 导出所有组件
export * from './components/index.js';
export { default as components } from './components/index.js';

// 导出所有 Hooks
export * from './hooks/useMediaQuery.js';

// 设计系统版本信息
export const DESIGN_SYSTEM_VERSION = '1.0.0';
export const FIGMA_FILE_ID = '42UD4JREd2wJv2jsXjjfXW';
export const LAST_UPDATED = '2025-01-07';

// 设计系统配置
export const designSystemConfig = {
  name: 'Figma-Based Design System',
  version: DESIGN_SYSTEM_VERSION,
  figmaFileId: FIGMA_FILE_ID,
  lastUpdated: LAST_UPDATED,
  description: '基于 Figma 设计稿自动生成的设计系统，包含完整的 tokens、组件和工具函数',
  
  // 设计原则
  principles: {
    consistency: '保持设计的一致性',
    accessibility: '确保可访问性',
    scalability: '支持可扩展性',
    maintainability: '易于维护和更新',
  },
  
  // 技术栈
  techStack: {
    framework: 'React',
    styling: 'CSS-in-JS (Inline Styles)',
    tokens: 'JavaScript Objects',
    buildTool: 'Vite',
  },
};

// 默认导出整个设计系统
import tokens from './tokens/index.js';
import components from './components/index.js';
import { useMediaQuery, useBreakpoint, useOrientation, useTheme } from './hooks/useMediaQuery.js';

const designSystem = {
  // 版本信息
  version: DESIGN_SYSTEM_VERSION,
  config: designSystemConfig,
  
  // Tokens
  tokens,
  colors: tokens.colors,
  spacing: tokens.spacing,
  typography: tokens.typography,
  
  // 组件
  components,
  Button: components.Button,
  Input: components.Input,
  Card: components.Card,
  
  // Hooks
  hooks: {
    useMediaQuery,
    useBreakpoint,
    useOrientation,
    useTheme,
  },
  
  // 工具函数
  utils: {
    getColor: tokens.getColor,
    getSpacing: tokens.getSpacing,
    getFontSize: tokens.getFontSize,
    getFontWeight: tokens.getFontWeight,
    getTextStyle: tokens.getTextStyle,
    createTypographyCSS: tokens.createTypographyCSS,
  },
};

export default designSystem; 