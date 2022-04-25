import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { darkTheme } from './theme';


/**
 * Recoil
 * RecoilRoot
 * recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 RecoilRoot 가 필요하다.
 * Root 컴포넌트가 RecoilRoot를 넣기에 가장 좋은 장소다.
 * 
 * 
 */
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ darkTheme }>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);