import fs from 'fs';

function analyzeFigmaFile() {
  try {
    console.log('正在分析 Figma 导出文件...');
    const figmaData = JSON.parse(fs.readFileSync('figma-export.json', 'utf8'));
    
    console.log('\n=== Figma 文件概览 ===');
    console.log('文件名:', figmaData.name);
    console.log('最后修改时间:', figmaData.lastModified);
    console.log('版本:', figmaData.version);
    
    // 分析页面结构
    console.log('\n=== 页面结构 ===');
    const pages = figmaData.document.children;
    pages.forEach((page, index) => {
      console.log(`页面 ${index + 1}: ${page.name} (${page.type})`);
      if (page.children) {
        console.log(`  - 包含 ${page.children.length} 个子元素`);
      }
    });
    
    // 分析设计系统信息
    console.log('\n=== 设计系统分析 ===');
    const designSystem = {
      colors: new Set(),
      spacing: new Set(),
      typography: new Set(),
      components: [],
      frames: [],
      textStyles: new Set(),
      effects: new Set()
    };
    
    function extractDesignInfo(node, depth = 0) {
      if (!node) return;
      
      const indent = '  '.repeat(depth);
      
      // 提取颜色
      if (node.fills && Array.isArray(node.fills)) {
        node.fills.forEach(fill => {
          if (fill.type === 'SOLID' && fill.color) {
            const color = `rgb(${Math.round(fill.color.r * 255)}, ${Math.round(fill.color.g * 255)}, ${Math.round(fill.color.b * 255)})`;
            designSystem.colors.add(color);
          }
        });
      }
      
      // 提取间距和尺寸
      if (node.paddingLeft) designSystem.spacing.add(node.paddingLeft);
      if (node.paddingRight) designSystem.spacing.add(node.paddingRight);
      if (node.paddingTop) designSystem.spacing.add(node.paddingTop);
      if (node.paddingBottom) designSystem.spacing.add(node.paddingBottom);
      if (node.itemSpacing) designSystem.spacing.add(node.itemSpacing);
      if (node.cornerRadius) designSystem.spacing.add(node.cornerRadius);
      
      // 提取字体信息
      if (node.style && node.style.fontFamily) {
        designSystem.typography.add(node.style.fontFamily);
      }
      if (node.style && node.style.fontSize) {
        designSystem.typography.add(node.style.fontSize);
      }
      if (node.style && node.style.fontWeight) {
        designSystem.typography.add(node.style.fontWeight);
      }
      
      // 识别组件
      if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
        designSystem.components.push({
          name: node.name,
          type: node.type,
          id: node.id
        });
        console.log(`${indent}发现组件: ${node.name} (${node.type})`);
      }
      
      // 识别框架
      if (node.type === 'FRAME') {
        designSystem.frames.push({
          name: node.name,
          id: node.id,
          width: node.absoluteBoundingBox?.width,
          height: node.absoluteBoundingBox?.height
        });
        console.log(`${indent}发现框架: ${node.name} (${node.absoluteBoundingBox?.width}x${node.absoluteBoundingBox?.height})`);
      }
      
      // 识别文本样式
      if (node.type === 'TEXT') {
        const textStyle = {
          fontFamily: node.style?.fontFamily,
          fontSize: node.style?.fontSize,
          fontWeight: node.style?.fontWeight,
          text: node.characters?.substring(0, 50) + (node.characters?.length > 50 ? '...' : '')
        };
        designSystem.textStyles.add(JSON.stringify(textStyle));
        console.log(`${indent}发现文本: ${textStyle.text}`);
      }
      
      // 提取效果
      if (node.effects && Array.isArray(node.effects)) {
        node.effects.forEach(effect => {
          designSystem.effects.add(effect.type);
        });
      }
      
      // 递归处理子节点
      if (node.children) {
        node.children.forEach(child => extractDesignInfo(child, depth + 1));
      }
    }
    
    // 遍历所有页面
    pages.forEach(page => {
      console.log(`\n分析页面: ${page.name}`);
      extractDesignInfo(page);
    });
    
    // 输出分析结果
    console.log('\n=== 设计 Tokens 总结 ===');
    console.log('颜色数量:', designSystem.colors.size);
    console.log('间距值数量:', designSystem.spacing.size);
    console.log('字体样式数量:', designSystem.typography.size);
    console.log('组件数量:', designSystem.components.length);
    console.log('框架数量:', designSystem.frames.length);
    console.log('文本样式数量:', designSystem.textStyles.size);
    console.log('效果类型数量:', designSystem.effects.size);
    
    // 保存详细分析结果
    const analysisResult = {
      fileInfo: {
        name: figmaData.name,
        lastModified: figmaData.lastModified,
        version: figmaData.version
      },
      pages: pages.map(page => ({
        name: page.name,
        type: page.type,
        childrenCount: page.children?.length || 0
      })),
      designTokens: {
        colors: Array.from(designSystem.colors).sort(),
        spacing: Array.from(designSystem.spacing).sort((a, b) => a - b),
        typography: Array.from(designSystem.typography).sort(),
        components: designSystem.components,
        frames: designSystem.frames,
        textStyles: Array.from(designSystem.textStyles).map(s => JSON.parse(s)),
        effects: Array.from(designSystem.effects)
      }
    };
    
    fs.writeFileSync('figma-analysis.json', JSON.stringify(analysisResult, null, 2));
    console.log('\n详细分析结果已保存到 figma-analysis.json');
    
    return analysisResult;
    
  } catch (error) {
    console.error('分析 Figma 文件失败:', error.message);
    return null;
  }
}

analyzeFigmaFile(); 