import React from 'react'
import menu from './sort-descending.svg'

import { SideBar, SideBarItem } from 'library'
import 'library/dist/index.css'

const App = () => {
  return (
    <SideBar ham={menu} iconColor='blue'>
      <SideBarItem to='https://google.com'>hello</SideBarItem>
    </SideBar>
  )
}

export default App
