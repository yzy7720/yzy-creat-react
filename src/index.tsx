/*
 * @Author: yizhiyu
 * @Date: 2022-01-07 15:34:50
 * @LastEditTime: 2022-01-07 16:20:04
 * @LastEditors: yizhiyu
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \yzy-creat-react\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from '../src/store/store'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
