import { useState, useEffect } from 'react';

// 断点定义 (基于 Figma 设计稿的响应式设计)
const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
  wide: 1920,
};

// 媒体查询字符串
const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile - 1}px)`,
  tablet: `(min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet - 1}px)`,
  desktop: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  wide: `(min-width: ${breakpoints.desktop}px)`,
  
  // 向上断点
  mobileUp: `(min-width: ${breakpoints.mobile}px)`,
  tabletUp: `(min-width: ${breakpoints.tablet}px)`,
  desktopUp: `(min-width: ${breakpoints.desktop}px)`,
  
  // 向下断点
  mobileDown: `(max-width: ${breakpoints.mobile - 1}px)`,
  tabletDown: `(max-width: ${breakpoints.tablet - 1}px)`,
  desktopDown: `(max-width: ${breakpoints.desktop - 1}px)`,
};

/**
 * 媒体查询 Hook
 * @param {string} query - 媒体查询字符串或预定义的断点名称
 * @returns {boolean} - 是否匹配当前媒体查询
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // 如果是预定义的断点名称，使用对应的媒体查询
    const mediaQuery = mediaQueries[query] || query;
    
    const mediaQueryList = window.matchMedia(mediaQuery);
    
    // 设置初始值
    setMatches(mediaQueryList.matches);
    
    // 监听变化
    const handleChange = (event) => {
      setMatches(event.matches);
    };
    
    // 添加监听器
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);
    } else {
      // 兼容旧版浏览器
      mediaQueryList.addListener(handleChange);
    }
    
    // 清理监听器
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange);
      } else {
        // 兼容旧版浏览器
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};

/**
 * 响应式断点 Hook
 * @returns {object} - 当前匹配的断点信息
 */
export const useBreakpoint = () => {
  const isMobile = useMediaQuery('mobile');
  const isTablet = useMediaQuery('tablet');
  const isDesktop = useMediaQuery('desktop');
  const isWide = useMediaQuery('wide');
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    isWide,
    // 当前断点名称
    current: isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : 'wide',
    // 是否为移动设备
    isMobileDevice: isMobile || isTablet,
    // 是否为桌面设备
    isDesktopDevice: isDesktop || isWide,
  };
};

/**
 * 方向 Hook
 * @returns {object} - 屏幕方向信息
 */
export const useOrientation = () => {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isLandscape = useMediaQuery('(orientation: landscape)');
  
  return {
    isPortrait,
    isLandscape,
    orientation: isPortrait ? 'portrait' : 'landscape',
  };
};

/**
 * 主题 Hook (为未来的主题切换做准备)
 * @returns {object} - 主题信息
 */
export const useTheme = () => {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');
  const isLight = useMediaQuery('(prefers-color-scheme: light)');
  
  return {
    isDark,
    isLight,
    theme: isDark ? 'dark' : 'light',
  };
};

export default useMediaQuery; 