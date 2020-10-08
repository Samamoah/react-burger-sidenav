import React, { useState } from 'react'
import styles from './styles.module.css'
import 'animate.css/animate.min.css'

// const menu = () => {
//   return <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>menu</title><g fill="none" class="nc-icon-wrapper"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" fill="#4A5568"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" fill="#4A5568"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 15a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" fill="#4A5568"/></g></svg>
// }

export const SideBarItem = ({
  children,
  size = '20px',
  to = '#',
  bgHover = '#f7fafc',
  bgColor = 'white',
  padding = '1rem',
  target = ''
}) => {
  var [hover, setHover] = useState(false)
  return (
    <a
      href={to}
      onMouseOver={() => {
        setHover(!hover)
      }}
      target={target}
      style={{
        color: 'black',
        display: 'block',
        backgroundColor: `${hover ? bgHover : bgColor}`,
        padding: `${padding}`,
        textSize: `${size},
      }`
      }}
    >
      {children}
    </a>
  )
}

export const SideBar = ({
  children,
  ham,
  iconColor = '#00000',
  closeColor = '#00000',
  backgroundColor = 'white'
}) => {
  var [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <a
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {ham ? (
          <img src={ham} alt='ham' />
        ) : (
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            style={{ width: '30px', height: '30px' }}
          >
            <title>menu</title>
            <g fill='none' className='nc-icon-wrapper'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                fill={iconColor}
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                fill={iconColor}
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 15a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                fill={iconColor}
              />
            </g>
          </svg>
        )}
      </a>
      {isOpen && (
        <div
          className={`${styles.ham} animate__animated animate__slideInLeft`}
          style={{
            backgroundColor: `${backgroundColor}`
          }}
        >
          <div style={{ display: 'flex' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              style={{
                width: '30px',
                height: '30px',
                marginRight: '0',
                marginLeft: 'auto'
              }}
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <title>ic_close_24px</title>
              <g fill={closeColor}>
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
              </g>
            </svg>
          </div>
          {children}
        </div>
      )}
    </div>
  )
}
// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
