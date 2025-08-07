import React from 'react';

const ContactSection = () => {
  return (
    <section 
      style={{
        backgroundColor: '#89CFF0', // 新配色：天蓝色背景
        padding: '96px 384px',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '1104px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '64px'
        }}
      >
        {/* 标题区域 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <h2
            style={{
              fontSize: '44.4px',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.027em',
              color: '#F4A259', // 新配色：哑光橙章节标题
              textAlign: 'center',
              margin: 0
            }}
          >
            联系我
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

            有任何项目上的合作，欢迎联系我。
          </p>
        </div>

        {/* 联系表单和联系信息 */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            alignItems: 'stretch'
          }}
        >
          {/* 联系表单 */}
          <div
            style={{
              flex: 1,
              background: '#FFFFFF', // 表单背景使用白色增强可读性
              border: '1px solid #E0E0E0', // 新配色：浅灰边框
              borderRadius: '8px',
              padding: '24px'
            }}
          >
            <h3
              style={{
                fontSize: '22.9px',
                fontWeight: 400,
                lineHeight: 1.4,
                color: '#F4A259', // 新配色：哑光橙标题
                margin: '0 0 24px 0'
              }}
            >
              发送消息
            </h3>
            
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              {/* 姓名和邮箱 */}
              <div
                style={{
                  display: 'flex',
                  gap: '24px'
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <label
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: 1.25,
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase',
                      color: '#2A2A2A' // 新配色：炭黑文字
                    }}
                  >
                    姓名
                  </label>
                  <input
                    type="text"
                    placeholder="您的姓名"
                    style={{
                      padding: '14.5px 17px',
                      background: '#F8F8F8', // 输入框背景
                      border: '1px solid #E0E0E0', // 新配色：浅灰边框
                      borderRadius: '8px',
                      fontSize: '15.3px',
                      fontWeight: 400,
                      lineHeight: 1.21,
                      color: '#2A2A2A', // 新配色：炭黑文字
                      outline: 'none'
                    }}
                  />
                </div>
                
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <label
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: 1.25,
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase',
                      color: '#2A2A2A' // 新配色：炭黑文字
                    }}
                  >
                    邮箱
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{
                      padding: '14.5px 17px',
                      background: '#F8F8F8', // 输入框背景
                      border: '1px solid #E0E0E0', // 新配色：浅灰边框
                      borderRadius: '8px',
                      fontSize: '15.3px',
                      fontWeight: 400,
                      lineHeight: 1.21,
                      color: '#2A2A2A', // 新配色：炭黑文字
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* 主题 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <label
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    letterSpacing: '0.025em',
                    textTransform: 'uppercase',
                    color: '#2A2A2A' // 新配色：炭黑文字
                  }}
                >
                  主题
                </label>
                <input
                  type="text"
                  placeholder="这是关于什么的？"
                  style={{
                    padding: '14.5px 17px',
                    background: '#F8F8F8', // 输入框背景
                    border: '1px solid #E0E0E0', // 新配色：浅灰边框
                    borderRadius: '8px',
                    fontSize: '14.9px',
                    fontWeight: 400,
                    lineHeight: 1.21,
                    color: '#2A2A2A', // 新配色：炭黑文字
                    outline: 'none'
                  }}
                />
              </div>

              {/* 消息 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <label
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: 1.43,
                    letterSpacing: '0.025em',
                    textTransform: 'uppercase',
                    color: '#2A2A2A' // 新配色：炭黑文字
                  }}
                >
                  消息
                </label>
                <textarea
                  placeholder="告诉我您的项目..."
                  rows={6}
                  style={{
                    padding: '13px 17px',
                    background: '#F8F8F8', // 输入框背景
                    border: '1px solid #E0E0E0', // 新配色：浅灰边框
                    borderRadius: '8px',
                    fontSize: '14.9px',
                    fontWeight: 400,
                    lineHeight: 1.61,
                    color: '#2A2A2A', // 新配色：炭黑文字
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>

              {/* 发送按钮 */}
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  background: '#F4A259', // 新配色：哑光橙按钮
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '13.3px',
                  fontWeight: 400,
                  lineHeight: 1.31,
                  color: '#FFFFFF', // 按钮文字白色
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#E6935F';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#F4A259';
                }}
              >
                <span>📤</span>
                发送消息
              </button>
            </form>
          </div>

          {/* 联系信息 */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '32px'
            }}
          >
            {/* 联系信息卡片 */}
            <div
              style={{
                background: '#FFFFFF', // 信息卡片背景使用白色
                border: '1px solid #E0E0E0', // 新配色：浅灰边框
                borderRadius: '8px',
                padding: '24px'
              }}
            >
              <h3
                style={{
                  fontSize: '22.7px',
                  fontWeight: 400,
                  lineHeight: 1.41,
                  color: '#F4A259', // 新配色：哑光橙标题
                  textAlign: 'center',
                  margin: '0 0 24px 0'
                }}
              >
                联系信息
              </h3>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                {/* 邮箱 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: '#F4A259', // 新配色：哑光橙图标背景
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>📧</span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: 1.43,
                        letterSpacing: '0.025em',
                        textTransform: 'uppercase',
                        color: '#2A2A2A', // 新配色：炭黑文字
                        marginBottom: '4px'
                      }}
                    >
                      邮箱
                    </div>
                    <a
                      href="mailto:2676925660@qq.com"
                      style={{
                        fontSize: '15.3px',
                        fontWeight: 400,
                        lineHeight: 1.57,
                        color: '#F4A259', // 新配色：哑光橙链接
                        textDecoration: 'none'
                      }}
                    >
                      2676925660@qq.com
                    </a>
                  </div>
                </div>

                {/* 位置 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: '#F4A259', // 新配色：哑光橙图标背景
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>📍</span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '13.8px',
                        fontWeight: 400,
                        lineHeight: 1.45,
                        letterSpacing: '0.025em',
                        textTransform: 'uppercase',
                        color: '#2A2A2A', // 新配色：炭黑文字
                        marginBottom: '4px'
                      }}
                    >
                      位置
                    </div>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: '#2A2A2A' // 新配色：炭黑文字
                      }}
                    >
                      杭州，中国
                    </div>
                  </div>
                </div>

                
                
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 