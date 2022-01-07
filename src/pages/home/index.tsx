import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  }
  return (
    <div>
      <h1>一只鱼的主页</h1>
      <Button type='primary' onClick={toLogin}>跳转到登录页</Button>
    </div>
  );
};
