import React, { Component } from 'react';
import { Button } from 'antd';

interface Iprops {
  history: any,
}

class Home extends Component<Iprops,any>{
  render() {
    return (
      <div>
        <h1>一只鱼的主页</h1>
        <Button type='primary' onClick={() => this.props.history.push('/login')}>跳转到登录页</Button>
      </div>
    );
  }
}

export default Home;
