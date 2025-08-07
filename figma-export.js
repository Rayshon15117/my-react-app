import https from 'https';
import fs from 'fs';

const FIGMA_API_KEY = 'figd_dXQMw9ivHp8p3DLRwuZKIvT6zWQU2Ymjk-Nc6u7S';
const FILE_KEY = '42UD4JREd2wJv2jsXjjfXW';

function getFigmaFile(fileKey) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: `/v1/files/${fileKey}`,
      method: 'GET',
      headers: {
        'X-Figma-Token': FIGMA_API_KEY
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function main() {
  try {
    console.log('正在获取 Figma 文件信息...');
    const figmaData = await getFigmaFile(FILE_KEY);
    
    console.log('Figma 文件信息获取成功！');
    console.log('文件名:', figmaData.name);
    console.log('最后修改时间:', figmaData.lastModified);
    console.log('版本:', figmaData.version);
    
    // 保存到文件
    fs.writeFileSync('figma-export.json', JSON.stringify(figmaData, null, 2));
    console.log('数据已保存到 figma-export.json');
    
    // 分析设计 tokens
    analyzeDesignTokens(figmaData);
    
  } catch (error) {
    console.error('获取 Figma 文件失败:', error.message);
  }
}

function analyzeDesignTokens(figmaData) {
  console.log('\n=== 设计 Tokens 分析 ===');
  
  const tokens = {
    colors: new Set(),
    spacing: new Set(),
    typography: new Set(),
    components: []
  };
  
  function extractTokens(node) {
    if (!node) return;
    
    // 提取颜色
    if (node.fills && Array.isArray(node.fills)) {
      node.fills.forEach(fill => {
        if (fill.type === 'SOLID' && fill.color) {
          const color = `rgb(${Math.round(fill.color.r * 255)}, ${Math.round(fill.color.g * 255)}, ${Math.round(fill.color.b * 255)})`;
          tokens.colors.add(color);
        }
      });
    }
    
    // 提取间距
    if (node.paddingLeft) tokens.spacing.add(node.paddingLeft);
    if (node.paddingRight) tokens.spacing.add(node.paddingRight);
    if (node.paddingTop) tokens.spacing.add(node.paddingTop);
    if (node.paddingBottom) tokens.spacing.add(node.paddingBottom);
    if (node.itemSpacing) tokens.spacing.add(node.itemSpacing);
    
    // 提取字体信息
    if (node.style && node.style.fontFamily) {
      tokens.typography.add(node.style.fontFamily);
    }
    if (node.style && node.style.fontSize) {
      tokens.typography.add(node.style.fontSize);
    }
    
    // 识别组件
    if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      tokens.components.push({
        name: node.name,
        type: node.type,
        id: node.id
      });
    }
    
    // 递归处理子节点
    if (node.children) {
      node.children.forEach(child => extractTokens(child));
    }
  }
  
  // 遍历所有页面
  Object.values(figmaData.document.children).forEach(page => {
    extractTokens(page);
  });
  
  console.log('发现的颜色:', Array.from(tokens.colors));
  console.log('发现的间距值:', Array.from(tokens.spacing));
  console.log('发现的字体:', Array.from(tokens.typography));
  console.log('发现的组件数量:', tokens.components.length);
  
  // 保存 tokens 分析结果
  const tokensData = {
    colors: Array.from(tokens.colors),
    spacing: Array.from(tokens.spacing),
    typography: Array.from(tokens.typography),
    components: tokens.components
  };
  
  fs.writeFileSync('design-tokens.json', JSON.stringify(tokensData, null, 2));
  console.log('设计 tokens 已保存到 design-tokens.json');
}

main(); 