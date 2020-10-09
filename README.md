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

## SideNav Parameters

|   params   | value  | default value |
| :--------: | :----: | :-----------: |
|    ham     | string |      ''       |
| iconColor  | string |    #00000     |
| closeColor | string |    #00000     |
|  bgColor   | string |     white     |
| className  | string |      ''       |

&nbsp;

## SideNavItem Parameters

|  params   | value  | default value |
| :-------: | :----: | :-----------: |
| textSize  | string |     20px      |
|    to     | string |       #       |
|  bgHover  | string |    #f7fafc    |
|  bgColor  | string |     white     |
|  padding  | string |     1rem      |
|  target   | string |      ''       |
| className | string |      ''       |

## License

MIT © [Samamoah](https://github.com/Samamoah)
