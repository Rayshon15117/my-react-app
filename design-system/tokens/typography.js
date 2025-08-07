// 基于 Figma 设计稿提取的字体排版 tokens
export const typography = {
  // 字体族
  fontFamily: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'SF Mono, Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  },
  
  // 字体大小 (基于 Figma 中的实际值)
  fontSize: {
    xs: '11px',      // 11.0625, 11.25, 11.4375, 11.625, 11.8125
    sm: '12px',      // 12, 12.90625, 12.90625
    base: '13px',    // 13.015625, 13.125, 13.234375, 13.34375, 13.453125, 13.671875, 13.78125
    md: '14px',      // 14, 14.625, 14.75, 14.875
    lg: '15px',      // 15, 15.25
    xl: '16px',      // 16, 16.59375, 16.734375
    '2xl': '18px',   // 18
    '3xl': '20px',   // 20, 19.6875
    '4xl': '24px',   // 24
    '5xl': '30px',   // 30
    '6xl': '45px',   // 45, 45.5625
    '7xl': '60px',   // 60
  },
  
  // 字体粗细
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // 行高
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
  
  // 字间距
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  },
  
  // 预定义的文本样式
  textStyles: {
    // 标题样式
    h1: {
      fontSize: '60px',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.025em',
    },
    
    // 正文样式
    body: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0',
    },
    bodySmall: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    
    // 标签样式
    label: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.025em',
    },
    
    // 按钮文本
    button: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.025em',
    },
    
    // 输入框文本
    input: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    
    // 小文本
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0.025em',
    },
  }
};

// 字体工具函数
export const getFontSize = (size) => {
  if (typography.fontSize[size] !== undefined) {
    return typography.fontSize[size];
  }
  
  if (typeof size === 'number') {
    return `${size}px`;
  }
  
  console.warn(`Font size "${size}" not found`);
  return typography.fontSize.base;
};

export const getFontWeight = (weight) => {
  if (typography.fontWeight[weight] !== undefined) {
    return typography.fontWeight[weight];
  }
  
  if (typeof weight === 'number') {
    return weight;
  }
  
  console.warn(`Font weight "${weight}" not found`);
  return typography.fontWeight.normal;
};

export const getTextStyle = (style) => {
  if (typography.textStyles[style] !== undefined) {
    return typography.textStyles[style];
  }
  
  console.warn(`Text style "${style}" not found`);
  return typography.textStyles.body;
};

// CSS 工具函数
export const createTypographyCSS = (style) => {
  const textStyle = getTextStyle(style);
  return `
    font-family: ${typography.fontFamily.primary};
    font-size: ${textStyle.fontSize};
    font-weight: ${textStyle.fontWeight};
    line-height: ${textStyle.lineHeight};
    letter-spacing: ${textStyle.letterSpacing};
  `;
};

export default typography; 