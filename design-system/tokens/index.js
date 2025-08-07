// 设计系统 Tokens 统一导出
export { colors, getColor } from './colors.js';
export { spacing, getSpacing, responsiveSpacing } from './spacing.js';
export { typography, getFontSize, getFontWeight, getTextStyle, createTypographyCSS } from './typography.js';

// 默认导出所有 tokens
import colors from './colors.js';
import spacing from './spacing.js';
import typography from './typography.js';

const tokens = {
  colors,
  spacing,
  typography,
};

export default tokens; 