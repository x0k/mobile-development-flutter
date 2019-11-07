import React from 'react'

export default ({ children, ...props }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      ...props
    }}
  >
    {children}
  </div>
)