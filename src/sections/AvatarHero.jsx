import React from 'react';

const AvatarHero = () => {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '50vh', // 从100vh减小到50vh，高度减半
        maxWidth: '1200px', // 添加最大宽度
        margin: '0 auto', // 居中显示
        display: 'flex',
        alignItems: 'flex-start', // 改为顶部对齐
        justifyContent: 'center',
        paddingTop: '100px', // 添加顶部内边距100px
        backgroundColor: '#89CFF0', // 新配色：天蓝色背景
        overflow: 'hidden'
      }}
    >
      {/* 背景装饰元素 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '445px',
          height: '445px',
          border: '1px solid #E0E0E0', // 新配色：浅灰装饰线
          borderRadius: '50%',
          opacity: 0.3
        }}
      />
      
      {/* 头像容器 */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        {/* 头像背景装饰 */}
        <div
          style={{
            position: 'absolute',
            top: '-16px',
            left: '-16px',
            width: '224px',
            height: '224px',
            background: 'linear-gradient(90deg, #F4A25920, #F4A25930)', // 新配色：哑光橙渐变
            borderRadius: '50%',
            filter: 'blur(24px)',
            zIndex: 0
          }}
        />
        
        {/* 头像边框 */}
        <div
          style={{
            position: 'relative',
            width: '192px',
            height: '192px',
            padding: '4px',
            background: '#FFFFFF', // 头像边框保持白色以形成对比
            border: '4px solid #F4A259', // 新配色：哑光橙边框
            borderRadius: '50%',
            boxShadow: '0px 25px 50px -12px rgba(42, 42, 42, 0.15)', // 新配色：炭黑阴影
            zIndex: 1
          }}
        >
          {/* 头像内容 - 改为图片 */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <img
              src="/avatar.png" // 头像图片路径，你需要将图片放在 public 文件夹中
              alt="林瑞晟头像"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
              onError={(e) => {
                // 如果图片加载失败，显示文字备选方案
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* 文字备选方案（当图片加载失败时显示） */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#F8F8F8', // 新配色：浅灰背景
                borderRadius: '50%',
                display: 'none', // 默认隐藏，图片失败时显示
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                fontWeight: 300,
                color: '#F4A259', // 新配色：哑光橙文字
                fontFamily: 'Inter, sans-serif'
              }}
            >
              林
            </div>
          </div>
        </div>
        
        {/* 姓名显示 */}
        <div
          style={{
            marginTop: '100px',
            marginBottom: '50px',
            fontSize: '32px',
            fontWeight: 300,
            color: '#2A2A2A', // 新配色：炭黑文字
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            letterSpacing: '0.02em',
            zIndex: 2
          }}
        >
          林瑞晟
        </div>
      </div>
      
      {/* 背景装饰点 */}
      <div
        style={{
          position: 'absolute',
          top: '157px',
          left: '768px',
          width: '384px',
          height: '384px',
          background: '#F4A259', // 新配色：哑光橙
          borderRadius: '50%',
          filter: 'blur(64px)',
          opacity: 0.05
        }}
      />
      
      {/* 装饰点 */}
      {[
        { x: 384, y: 219, size: 4 },
        { x: 672, y: 351, size: 4 },
        { x: 960, y: 479, size: 4 },
        { x: 1248, y: 202, size: 4 },
        { x: 1536, y: 346, size: 4 },
        { x: 1824, y: 491, size: 4 }
      ].map((point, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: point.y,
            left: point.x,
            width: point.size,
            height: point.size,
            background: '#E0E0E0', // 新配色：浅灰装饰点
            borderRadius: '50%',
            opacity: 0.4 + Math.random() * 0.3
          }}
        />
      ))}
    </section>
  );
};

export default AvatarHero; 