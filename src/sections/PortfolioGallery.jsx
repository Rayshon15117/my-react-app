import React from 'react';

const PortfolioGallery = () => {
  const projects = [
    {
      id: 1,
      title: '设计系统平台',
      description: '企业级设计系统管理平台，支持组件库、设计令牌和文档一体化管理。',
      image: '🎨',
      skills: ['React', 'TypeScript', 'Storybook', 'Figma API'],
      featured: true,
      demoUrl: '#',
      githubUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 2,
      title: 'AI 助手应用',
      description: '基于大语言模型的智能助手，支持多模态交互和个性化定制。',
      image: '🤖',
      skills: ['Next.js', 'OpenAI API', 'Prisma', 'Vercel'],
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: '实时协作工具',
      description: '支持多人实时协作的在线编辑器，类似 Figma 的协作体验。',
      image: '👥',
      skills: ['WebRTC', 'Socket.io', 'Canvas API', 'MongoDB'],
      featured: true,
      demoUrl: '#',
      caseStudyUrl: '#'
    }
  ];

  return (
    <section 
      style={{
        backgroundColor: '#6BADD6', // 新配色：深天蓝色背景
        padding: '96px 384px',
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
          background: `linear-gradient(135deg, #F4A259 0A 0%, transparent 100%)`,
          opacity: 0.05
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
        {/* 标题区域 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '64px'
          }}
        >
          <h2
            style={{
              fontSize: '45px',
              fontWeight: 400,
              lineHeight: 1.07,
              letterSpacing: '-0.027em',
              color: '#F4A259', // 新配色：哑光橙章节标题
              textAlign: 'center',
              margin: 0
            }}
          >
            作品集
          </h2>
          
          <p
            style={{
              fontSize: '16.7px',
              fontWeight: 400,
              lineHeight: 1.67,
              color: '#2A2A2A', // 新配色：炭黑文字
              textAlign: 'center',
              maxWidth: '672px',
              margin: 0
            }}
          >
            展示我的技能和对创造数字体验的热情的项目选集
          </p>
          
          {/* 装饰线 */}
          <div
            style={{
              width: '39.7px',
              height: '1px',
              background: '#E0E0E0', // 新配色：浅灰装饰线
              opacity: 0.9,
              marginTop: '16px'
            }}
          />
        </div>

        {/* 项目网格 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
            marginBottom: '48px'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                background: '#FFFFFF', // 项目卡片背景使用白色
                border: '1px solid #E0E0E0', // 新配色：浅灰边框
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* 项目图片 */}
              <div
                style={{
                  border: '1px solid #E0E0E0', // 新配色：浅灰边框
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: '#F4A25930', // 新配色：哑光橙透明背景
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px'
                  }}
                >
                  {project.image}
                </div>
                
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    lineHeight: 1.43,
                    color: '#2A2A2A', // 新配色：炭黑文字
                    textAlign: 'center'
                  }}
                >
                  {project.title}
                </span>
              </div>

              {/* Featured 标签 */}
              {project.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: '#F4A259', // 新配色：哑光橙标签背景
                    borderRadius: '50px',
                    padding: '2px 12px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: 1.33,
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase',
                      color: '#FFFFFF' // 标签文字白色
                    }}
                  >
                    精选
                  </span>
                </div>
              )}

              {/* 项目内容 */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 300,
                    lineHeight: 1.33,
                    color: '#F4A259', // 新配色：哑光橙标题
                    margin: 0
                  }}
                >
                  {project.title}
                </h3>
                
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.625,
                    color: '#2A2A2A', // 新配色：炭黑文字
                    margin: 0
                  }}
                >
                  {project.description}
                </p>

                {/* 技能标签 */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    paddingTop: '4px'
                  }}
                >
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '4px 8px',
                        background: '#F0F0F0', // 技能标签背景
                        borderRadius: '4px',
                        fontSize: '11.6px',
                        fontWeight: 400,
                        lineHeight: 1.38,
                        letterSpacing: '0.026em',
                        color: '#2A2A2A' // 新配色：炭黑文字
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* 操作按钮 */}
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    paddingTop: '12px'
                  }}
                >
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 12px',
                        background: '#F4A259', // 新配色：哑光橙按钮
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontSize: '11.4px',
                        fontWeight: 400,
                        lineHeight: 1.31,
                        color: '#FFFFFF', // 按钮文字白色
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#E6935F';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#F4A259';
                      }}
                    >
                      <span>→</span>
                      在线演示
                      <span>↗</span>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '7px 13px',
                        background: '#FFFFFF',
                        border: '1px solid #E0E0E0', // 新配色：浅灰边框
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontSize: '11.3px',
                        fontWeight: 400,
                        lineHeight: 1.33,
                        color: '#2A2A2A', // 新配色：炭黑文字
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F0F0F0';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#FFFFFF';
                      }}
                    >
                      <span>📁</span>
                      GitHub
                      <span>↗</span>
                    </a>
                  )}
                  
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 12px',
                        background: 'transparent',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontSize: '11.3px',
                        fontWeight: 400,
                        lineHeight: 1.33,
                        color: '#2A2A2A', // 新配色：炭黑文字
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F0F0F0';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                      }}
                    >
                      <span>📄</span>
                      案例研究
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14.3px 25px',
              background: '#FFFFFF', // 按钮背景白色
              border: '1px solid #E0E0E0', // 新配色：浅灰边框
              borderRadius: '50px',
              fontSize: '13.2px',
              fontWeight: 400,
              lineHeight: 1.32,
              color: '#2A2A2A', // 新配色：炭黑文字
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#F0F0F0';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#FFFFFF';
            }}
          >
            查看所有项目
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery; 