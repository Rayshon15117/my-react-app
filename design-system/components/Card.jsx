import React from 'react';
import { colors, spacing, typography } from '../tokens/index.js';

const Card = ({ 
  children, 
  variant = 'default',
  padding = 'md',
  shadow = 'md',
  border = true,
  hover = false,
  className = '',
  ...props 
}) => {
  // 卡片变体样式
  const variants = {
    default: {
      backgroundColor: colors.neutral.white,
      borderColor: colors.neutral.gray[200],
    },
    elevated: {
      backgroundColor: colors.neutral.white,
      borderColor: colors.neutral.gray[200],
    },
    outlined: {
      backgroundColor: 'transparent',
      borderColor: colors.neutral.gray[300],
    },
    filled: {
      backgroundColor: colors.neutral.gray[50],
      borderColor: colors.neutral.gray[100],
    },
  };

  // 内边距样式
  const paddings = {
    none: '0',
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
  };

  // 阴影样式
  const shadows = {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  };

  // 悬停效果
  const hoverEffects = {
    none: {},
    lift: {
      transform: 'translateY(-2px)',
      boxShadow: shadows.lg,
    },
    glow: {
      boxShadow: `0 0 0 3px ${colors.primary[50]}, ${shadows.md}`,
    },
  };

  // 合并样式
  const cardStyle = {
    backgroundColor: variants[variant].backgroundColor,
    border: border ? `1px solid ${variants[variant].borderColor}` : 'none',
    borderRadius: '8px',
    padding: paddings[padding],
    boxShadow: shadows[shadow],
    transition: 'all 0.2s ease-in-out',
    fontFamily: typography.fontFamily.primary,
    color: colors.primary[500],
    ...(hover && hoverEffects.lift),
    '&:hover': hover ? hoverEffects.lift : {},
  };

  return (
    <div
      style={cardStyle}
      className={`design-system-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Card 子组件
Card.Header = ({ children, className = '', ...props }) => {
  const headerStyle = {
    paddingBottom: spacing.md,
    borderBottom: `1px solid ${colors.neutral.gray[100]}`,
    marginBottom: spacing.md,
  };

  return (
    <div
      style={headerStyle}
      className={`design-system-card-header ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Body = ({ children, className = '', ...props }) => {
  const bodyStyle = {
    flex: 1,
  };

  return (
    <div
      style={bodyStyle}
      className={`design-system-card-body ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Footer = ({ children, className = '', ...props }) => {
  const footerStyle = {
    paddingTop: spacing.md,
    borderTop: `1px solid ${colors.neutral.gray[100]}`,
    marginTop: spacing.md,
  };

  return (
    <div
      style={footerStyle}
      className={`design-system-card-footer ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 