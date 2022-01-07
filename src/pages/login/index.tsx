import React, { Component } from 'react';
import {Button} from 'antd';

interface Iprops{
  history:any
}

// class Login extends Component<Iprops,any> {
//   render() {
//     return (
//       <div>
//         <h1>我是登录页</h1>
//         <Button type='primary'>跳转到主页</Button>
//       </div>
//     );
//   }
// }

// export default Login;

export default function Login() {
  return (
    <div>
      <h1>我是登录页</h1>
      <Button type='primary'>跳转到主页</Button>
    </div>
  );
}
