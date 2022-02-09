/*
 * @Author: your name
 * @Date: 2022-01-07 15:34:50
 * @LastEditTime: 2022-01-07 16:22:46
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \yzy-creat-react\src\App.tsx
 */
import React from 'react';
import { HashRouter } from "react-router-dom";
import Main from './router/main'

function App() {
  return (
      <HashRouter>
        <Main />
      </HashRouter>
  );
}

export default App;
