import React from 'react';
import { colors, spacing, typography } from '../tokens/index.js';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  icon, 
  iconPosition = 'left',
  onClick,
  className = '',
  ...props 
}) => {
  // 按钮变体样式
  const variants = {
    primary: {
      backgroundColor: colors.primary[500],
      color: colors.neutral.white,
      border: 'none',
      '&:hover': {
        backgroundColor: colors.primary[400],
      },
      '&:active': {
        backgroundColor: colors.primary[600],
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.primary[500],
      border: `1px solid ${colors.primary[500]}`,
      '&:hover': {
        backgroundColor: colors.primary[50],
      },
      '&:active': {
        backgroundColor: colors.primary[100],
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.primary[500],
      border: 'none',
      '&:hover': {
        backgroundColor: colors.primary[50],
      },
      '&:active': {
        backgroundColor: colors.primary[100],
      },
    },
    accent: {
      backgroundColor: colors.accent.green,
      color: colors.neutral.white,
      border: 'none',
      '&:hover': {
        backgroundColor: colors.semantic.success,
      },
      '&:active': {
        backgroundColor: colors.primary[600],
      },
    },
  };

  // 按钮尺寸样式
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: typography.fontSize.sm,
      borderRadius: '4px',
      gap: '4px',
    },
    md: {
      padding: '12px 24px',
      fontSize: typography.fontSize.base,
      borderRadius: '6px',
      gap: '8px',
    },
    lg: {
      padding: '16px 32px',
      fontSize: typography.fontSize.lg,
      borderRadius: '8px',
      gap: '12px',
    },
    xl: {
      padding: '20px 40px',
      fontSize: typography.fontSize.xl,
      borderRadius: '10px',
      gap: '16px',
    },
  };

  // 合并样式
  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.medium,
    lineHeight: 1.4,
    letterSpacing: '0.025em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    outline: 'none',
    ...variants[variant],
    ...sizes[size],
    opacity: disabled ? 0.6 : 1,
    ...(disabled && {
      pointerEvents: 'none',
    }),
  };

  // 处理图标位置
  const renderIcon = () => {
    if (!icon) return null;
    
    const iconStyle = {
      width: size === 'sm' ? '16px' : size === 'lg' ? '20px' : '18px',
      height: size === 'sm' ? '16px' : size === 'lg' ? '20px' : '18px',
    };

    return (
      <span style={iconStyle}>
        {icon}
      </span>
    );
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      className={`design-system-button ${className}`}
      {...props}
    >
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
};

export default Button; 