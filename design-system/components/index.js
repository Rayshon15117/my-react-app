// 设计系统组件统一导出
export { default as Button } from './Button.jsx';
export { default as Input } from './Input.jsx';
export { default as Card } from './Card.jsx';

// 默认导出所有组件
import Button from './Button.jsx';
import Input from './Input.jsx';
import Card from './Card.jsx';

const components = {
  Button,
  Input,
  Card,
};

export default components; 