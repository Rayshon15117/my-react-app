import React from 'react';
import { colors } from '../../design-system/tokens/colors.js';

const GlobalFooter = () => {
  return (
    <section 
      style={{
        backgroundColor: colors.primary[400],
        padding: '64px 384px 32px',
        position: 'relative'
      }}
    >
      {/* 背景装饰 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 75% 25%, ${colors.primary[100]}0A 0%, transparent 50%)`,
          opacity: 0.4
        }}
      />
      
      <div
        style={{
          maxWidth: '1104px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >


        {/* 分隔线 */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: colors.primary[300],
            marginBottom: '32px'
          }}
        />

        {/* 底部信息 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'center'
          }}
        >
          {/* 版权信息 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center'
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: 1.43,
                color: colors.primary[100],
                margin: 0
              }}
            >
              © 2024 林瑞晟. 保留所有权利。
            </p>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: 1.33,
                color: colors.primary[200],
                margin: 0
              }}
            >
              粤ICP备2024123456号-1
            </p>
          </div>

          {/* 个人格言 */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '300px'
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: 1.57,
                color: colors.primary[100],
                fontStyle: 'italic',
                margin: 0
              }}
            >
              "保持好奇心，持续构建，永不停止学习。"
            </p>
          </div>
        </div>

        {/* 底部装饰 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '16px'
          }}
        >
          <div
            style={{
              width: '50px',
              height: '1px',
              background: colors.primary[100],
              opacity: 0.3
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalFooter; 