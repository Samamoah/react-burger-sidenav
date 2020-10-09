import React from 'react'
import menu from './sort-descending.svg'

import { SideBar, SideBarItem } from 'react-burger-sidenav'
import 'react-burger-sidenav/dist/index.css'

const App = () => {
  return (
    <SideBar ham={menu} iconColor='blue'>
      <SideBarItem to='https://google.com'>hello</SideBarItem>
    </SideBar>
  )
}

export default App
