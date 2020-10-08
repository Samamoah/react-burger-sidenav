import React from 'react'
import menu from './sort-descending.svg'

import { SideBar } from 'library'
import 'library/dist/index.css'

const App = () => {
  return (
    <SideBar ham={menu}>
      <p>Hello</p>
    </SideBar>
  )
}

export default App
