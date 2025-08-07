import React from 'react';
import AvatarHero from './sections/AvatarHero';
import SocialStrip from './sections/SocialStrip';
import ResumeTimeline from './sections/ResumeTimeline';
import PortfolioGallery from './sections/PortfolioGallery';
import ContactSection from './sections/ContactSection';
import GlobalFooter from './sections/GlobalFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 01 ▸ AvatarHero - 头像区/背景图 */}
      <AvatarHero />
      
      {/* 02 ▸ SocialStrip - 社媒链接条 */}
      <SocialStrip />
      
      {/* 03 ▸ ResumeTimeline - 个人履历时间线 */}
      <ResumeTimeline />
      
      {/* 04 ▸ PortfolioGallery - 作品集网格 */}
      <PortfolioGallery />
      
      {/* 05 ▸ ContactSection - 联系我表单或邮箱按钮 */}
      <ContactSection />
      
      {/* 06 ▸ GlobalFooter - 页脚 – 版权 & 备案信息 */}
      <GlobalFooter />
    </div>
  );
}

export default App;
