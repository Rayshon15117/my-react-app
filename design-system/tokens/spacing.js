// 基于 Figma 设计稿提取的间距 tokens
export const spacing = {
  // 基础间距单位 (基于 Figma 中最常用的值)
  xs: '4px',      // 4
  sm: '8px',      // 8
  md: '16px',     // 16
  lg: '24px',     // 24
  xl: '32px',     // 32
  '2xl': '48px',  // 48
  '3xl': '64px',  // 64
  '4xl': '96px',  // 96
  '5xl': '128px', // 128
  
  // 特殊间距值
  '1': '1px',
  '2': '2px',
  '3': '3px',
  '5': '5px',
  '6': '6px',
  '7': '7px',
  '12': '12px',
  '13': '13px',
  '14': '14px',
  '15': '15px',
  '17': '17px',
  '20': '20px',
  '25': '25px',
  '27': '27px',
  '28': '28px',
  '33': '33px',
  '65': '65px',
  '80': '80px',
  '133': '133px',
  
  // 大尺寸间距
  '192': '192px',
  '384': '384px',
  '512': '512px',
  
  // 组件特定间距
  button: {
    padding: '12px 24px',
    iconSpacing: '8px',
  },
  
  card: {
    padding: '24px',
    gap: '16px',
  },
  
  input: {
    padding: '12px 16px',
    iconSpacing: '8px',
  },
  
  // 布局间距
  layout: {
    section: '80px',
    container: '24px',
    grid: '16px',
  }
};

// 间距工具函数
export const getSpacing = (size) => {
  if (typeof size === 'number') {
    return `${size}px`;
  }
  
  if (spacing[size] !== undefined) {
    return spacing[size];
  }
  
  console.warn(`Spacing size "${size}" not found`);
  return spacing.md;
};

// 响应式间距
export const responsiveSpacing = {
  mobile: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  tablet: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  desktop: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  }
};

export default spacing; 