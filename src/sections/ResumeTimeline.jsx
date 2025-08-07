import React from 'react';

const ResumeTimeline = () => {
  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: '高级前端工程师',
      company: '科技创新公司',
      period: '2024.01 - 至今',
      description: '负责前端架构设计和团队技术方向，主导多个大型项目的前端开发。',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      icon: '💼'
    },
    {
      id: 2,
      type: 'work',
      title: '全栈开发工程师',
      company: '创业公司',
      period: '2023.06 - 2023.12',
      description: '独立完成产品从 0 到 1 的开发，包括前端、后端和部署运维。',
      skills: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker'],
      icon: '💼'
    },
    {
      id: 3,
      type: 'project',
      title: '开源项目贡献者',
      company: '个人项目',
      period: '2023.01 - 2023.05',
      description: '为多个知名开源项目贡献代码，获得社区认可。',
      skills: ['开源项目', 'GitHub', '社区贡献'],
      icon: '🌟'
    },
    {
      id: 4,
      type: 'education',
      title: '计算机科学科学与技术学士',
      company: '浙江树人学院',
      period: '2021.09 - 2022.12',
      description: '专注于人机交互和前端技术研究，GPA 3.8/4.0。',
      skills: ['人机交互', '学术研究', '学术背景'],
      icon: '🎓'
    }
  ];

  return (
    <section 
      style={{
        backgroundColor: '#89CFF0', // 新配色：天蓝色背景
        padding: '96px 512px',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '848px',
          margin: '0 auto',
          position: 'relative'
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
              fontSize: '45.6px',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.026em',
              color: '#F4A259', // 新配色：哑光橙章节标题
              textAlign: 'center',
              margin: 0
            }}
          >
            个人履历
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
            我的职业发展历程和教育背景
          </p>
        </div>

        {/* 时间线容器 */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}
        >
          {/* 时间线竖线 */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: '#F4A259', // 改为哑光橙，与卡片边框颜色统一
              transform: 'translateX(-50%)'
            }}
          />

          {/* 时间线项目 */}
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                paddingLeft: index % 2 === 0 ? '0' : '50%',
                paddingRight: index % 2 === 0 ? '50%' : '0'
              }}
            >
              {/* 时间线节点 */}
              <div
                style={{
                  position: 'absolute',
                  left: 'calc(50% - 6px)',
                  top: '16px',
                  width: '12px',
                  height: '12px',
                  border: '2px solid #F4A259', // 改为哑光橙边框
                  borderRadius: '50%',
                  background: '#F4A259', // 改为哑光橙背景
                  zIndex: 2
                }}
              />

              {/* 内容卡片 */}
              <div
                style={{
                  background: '#FFFFFF', // 卡片内容保持白色以增强可读性
                  border: '1px solid #F4A259', // 统一改为哑光橙边框
                  borderRadius: '8px',
                  padding: '16px 20px',
                  position: 'relative',
                  width: 'calc(100% - 32px)',
                  marginLeft: index % 2 === 0 ? '0' : '32px',
                  marginRight: index % 2 === 0 ? '32px' : '0',
                  boxShadow: '0px 4px 12px rgba(42, 42, 42, 0.08)' // 新配色：炭黑阴影
                }}
              >
                {/* 年份和图标 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px'
                  }}
                >
                  <div
                    style={{
                      padding: '4px 8px',
                      background: '#F4A259', // 新配色：哑光橙背景
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 400,
                      color: '#FFFFFF' // 新配色：白色文字
                    }}
                  >
                    {item.period.split(' ')[0]}
                  </div>
                  <div
                    style={{
                      fontSize: '16px'
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* 标题 */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: 1.33,
                    color: '#F4A259', // 新配色：哑光橙标题
                    margin: '0 0 4px 0'
                  }}
                >
                  {item.title}
                </h3>

                {/* 公司/学校 */}
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    lineHeight: 1.4,
                    color: '#2A2A2A', // 新配色：炭黑文字
                    margin: '0 0 8px 0'
                  }}
                >
                  {item.company}
                </p>

                {/* 描述 */}
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    color: '#2A2A2A', // 新配色：炭黑文字
                    margin: 0
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeTimeline; 