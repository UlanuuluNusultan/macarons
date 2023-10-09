import React from 'react'
import Layout from '../../layout/Layout'
import style from './App.module.css'
import { MainRoutes } from '../../routes/MainRoutes'
const App = () => {
  return (
  <div className={style.app}>
  <MainRoutes />
  </div>

  )
}

export default App