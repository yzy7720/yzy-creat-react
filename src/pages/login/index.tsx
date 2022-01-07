import React from 'react';
import {Button} from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/home');
  }
  return (
    <div>
      <h1>我是登录页</h1>
      <Button type='primary' onClick={toHome}>跳转到主页</Button>
    </div>
  );
}
