import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink} from "react-router";
import logo from "./assets/treviet.jpg";

function App() {

  return (
      <>
          <img src={logo} alt="Logo" className="logo"/>
          <h1>Trang chủ</h1>
          <NavLink to="/register" class="km">Đăng ký</NavLink> |{' '}
          <NavLink to="/login" class="km">Đăng nhập</NavLink> |{' '}
          <NavLink to="/dashboard" class="km">Quản trị</NavLink>
          <hr/>
          <div>
              <p>
                  <NavLink to="/posts/1">
                      React khai tử công cụ create-react-app
                  </NavLink>
              </p>
              <p>
                  <NavLink to="/posts/2">React 19 có gì mới?</NavLink>
              </p>
          </div>
      </>
  )
}

export default App
