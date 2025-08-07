// 基于 Figma 设计稿提取的颜色 tokens
export const colors = {
  // 主色调
  primary: {
    50: 'rgb(233, 235, 223)',   // 最浅色
    100: 'rgb(203, 204, 196)',  // 浅色
    200: 'rgb(139, 134, 127)',  // 中浅色
    300: 'rgb(67, 62, 56)',     // 中色
    400: 'rgb(36, 36, 36)',     // 中深色
    500: 'rgb(21, 21, 21)',     // 主色
    600: 'rgb(14, 53, 44)',     // 深色
  },
  
  // 强调色
  accent: {
    green: 'rgb(5, 223, 114)',  // 绿色强调
  },
  
  // 中性色
  neutral: {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(21, 21, 21)',
    gray: {
      50: 'rgb(233, 235, 223)',
      100: 'rgb(203, 204, 196)',
      200: 'rgb(139, 134, 127)',
      300: 'rgb(67, 62, 56)',
      400: 'rgb(36, 36, 36)',
      500: 'rgb(21, 21, 21)',
    }
  },
  
  // 语义化颜色
  semantic: {
    success: 'rgb(5, 223, 114)',
    error: 'rgb(255, 0, 0)',    // 补充错误色
    warning: 'rgb(255, 193, 7)', // 补充警告色
    info: 'rgb(0, 123, 255)',   // 补充信息色
  }
};

// 颜色工具函数
export const getColor = (path) => {
  const keys = path.split('.');
  let result = colors;
  
  for (const key of keys) {
    if (result[key] !== undefined) {
      result = result[key];
    } else {
      console.warn(`Color path "${path}" not found`);
      return colors.neutral.black;
    }
  }
  
  return result;
};

export default colors; 