import React, { useState } from 'react';
import { colors, spacing, typography } from '../tokens/index.js';

const Input = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  required = false,
  icon,
  iconPosition = 'left',
  size = 'md',
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // 输入框尺寸样式
  const sizes = {
    sm: {
      padding: '8px 12px',
      fontSize: typography.fontSize.sm,
      height: '32px',
      iconSize: '16px',
    },
    md: {
      padding: '12px 16px',
      fontSize: typography.fontSize.base,
      height: '40px',
      iconSize: '18px',
    },
    lg: {
      padding: '16px 20px',
      fontSize: typography.fontSize.lg,
      height: '48px',
      iconSize: '20px',
    },
  };

  // 基础输入框样式
  const inputStyle = {
    width: '100%',
    fontFamily: typography.fontFamily.primary,
    fontSize: sizes[size].fontSize,
    fontWeight: typography.fontWeight.normal,
    lineHeight: 1.5,
    color: colors.primary[500],
    backgroundColor: colors.neutral.white,
    border: `1px solid ${error ? colors.semantic.error : isFocused ? colors.primary[500] : colors.neutral.gray[200]}`,
    borderRadius: '6px',
    padding: sizes[size].padding,
    height: sizes[size].height,
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.6 : 1,
    ...(icon && iconPosition === 'left' && {
      paddingLeft: `calc(${sizes[size].padding.split(' ')[1]} + ${sizes[size].iconSize} + 8px)`,
    }),
    ...(icon && iconPosition === 'right' && {
      paddingRight: `calc(${sizes[size].padding.split(' ')[1]} + ${sizes[size].iconSize} + 8px)`,
    }),
    '&:focus': {
      borderColor: colors.primary[500],
      boxShadow: `0 0 0 3px ${colors.primary[50]}`,
    },
    '&:hover': {
      borderColor: isFocused ? colors.primary[500] : colors.neutral.gray[300],
    },
    '&::placeholder': {
      color: colors.neutral.gray[300],
    },
  };

  // 标签样式
  const labelStyle = {
    display: 'block',
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.primary[500],
    marginBottom: '4px',
    lineHeight: 1.4,
  };

  // 错误信息样式
  const errorStyle = {
    color: colors.semantic.error,
    fontSize: typography.fontSize.sm,
    marginTop: '4px',
    lineHeight: 1.4,
  };

  // 容器样式
  const containerStyle = {
    position: 'relative',
    width: '100%',
  };

  // 图标样式
  const iconStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: sizes[size].iconSize,
    height: sizes[size].iconSize,
    color: colors.neutral.gray[300],
    pointerEvents: 'none',
    ...(iconPosition === 'left' ? { left: '12px' } : { right: '12px' }),
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  return (
    <div style={containerStyle} className={`design-system-input-container ${className}`}>
      {label && (
        <label style={labelStyle}>
          {label}
          {required && <span style={{ color: colors.semantic.error }}> *</span>}
        </label>
      )}
      
      <div style={{ position: 'relative' }}>
        {icon && iconPosition === 'left' && (
          <span style={iconStyle}>
            {icon}
          </span>
        )}
        
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="design-system-input"
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <span style={iconStyle}>
            {icon}
          </span>
        )}
      </div>
      
      {error && (
        <div style={errorStyle} className="design-system-input-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input; 