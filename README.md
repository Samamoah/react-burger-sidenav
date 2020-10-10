# react-burger-sidenav

> A react sidebar

[![NPM](https://img.shields.io/npm/v/library.svg)](https://www.npmjs.com/package/library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-burger-sidenav
```

## Usage

```jsx
import React from 'react'

import { SideBar, SideBarItem } from 'react-burger-sidenav'
import 'react-burger-sidenav/dist/index.css'

const Example = () => {
  return (
    <SideBar>
      <SideBarItem>hello world</SideBarItem>
    </SideBar>
  )
}
```

## Demo Url

[https://samamoah.github.io/react-burger-sidenav](https://samamoah.github.io/react-burger-sidenav)

## SideNav Parameters

|   params   |  value  | default value |
| :--------: | :-----: | :-----------: |
|    ham     | string  |      ''       |
| iconColor  | string  |    #000000    |
| closeColor | string  |    #000000    |
|  bgColor   | string  |     white     |
| closeIcon  | boolean |     true      |
| className  | string  |      ''       |

## SideNavItem Parameters

|  params   | value  | default value |
| :-------: | :----: | :-----------: |
| textSize  | string |     20px      |
|    to     | string |       #       |
| textColor | string |    #000000    |
|  bgHover  | string |    #f7fafc    |
|  bgColor  | string |     white     |
|  padding  | string |     1rem      |
|  target   | string |      ''       |
| className | string |      ''       |

## License

MIT © [Samamoah](https://github.com/Samamoah)
